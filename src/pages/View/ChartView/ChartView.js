import React, {Component} from 'react';
import moment from 'moment';
import ScrollArea from 'react-scrollbar'
import { data } from './data';
import './ChartView.css';

export default class ChartView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    compareFunction(a, b) {
        if (moment(a.Date) < moment(b.Date)) return -1;
        if (moment(b.Date) < moment(a.Date)) return 1;
        if (a.Start < b.Start) return -1;
        if (b.Start < a.Start) return 1;
        return 0;
    }

    render() {
        let groupedData = {};
        data.sort(this.compareFunction).map(elem => {
            let index = (moment().diff(elem.Date, 'weeks') - 20) * -1;
            console.log(index);
            if (groupedData[index]) {
                groupedData[index].push(elem);
            } else {
                groupedData[index] = [];
                groupedData[index].push(elem);
            }
        });

        console.log(groupedData);

        return (
            <ScrollArea
                speed={0.8}
                className="area"
                contentClassName="content"
                horizontal={false}
                style={{ height: "300px" }}
            >
                <div >                
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Location</th>
                                <th>Save</th>
                            </tr>
                        </thead>
                        
                        {
                            Object.keys(groupedData).map((key) => (
                                <tbody>
                                    <tr>{`In ${key} weeks`}</tr>
                                    {
                                        groupedData[key].map((elem, index) =>
                                        <tr key={index}>
                                            <td>{elem.Date}</td>
                                            <td>{elem.Start} - {elem.End}</td>
                                            <td>{elem.Location.charAt(0) + elem.Location.substr(1).toLowerCase()}</td>
                                            <td>{elem.saved}</td>
                                        </tr>)
                                    }
                                </tbody>
                            ))
                        }
                        
                    </table>
                </div>
            </ScrollArea>
        )
    }
}