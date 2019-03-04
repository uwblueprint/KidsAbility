import React, {Component} from 'react';
import moment from 'moment';
import { data } from './data';
import Icon from '@material-ui/core/Icon';
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

    onClickSave = (e) => {
        e.target.innerHTML = (e.target.innerHTML === "bookmark") ? "bookmark_border" : "bookmark";
    }

    render() {
        let groupedData = {};
        data.sort(this.compareFunction).forEach(elem => {
            let key = (moment().diff(elem.Date, 'weeks') - 20) * -1;
            if (groupedData[key]) {
                groupedData[key].push(elem);
            } else {
                groupedData[key] = [];
                groupedData[key].push(elem);
            }
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Location</th>
                        <th>Save</th>
                    </tr>
                </thead>
                <tbody>
                {
                    Object.keys(groupedData).map((key) => (
                        <tr>
                            <tr>
                                <td className="section-header">{`In ${key} weeks`}</td>
                            </tr>
                            {
                                groupedData[key].map((elem, index) =>
                                    <tr key={index}>
                                        <td>{moment(elem.Date).format('MMM D')}</td>
                                        <td>{moment(elem.Start, 'h:mm').format('h:mm a')} - {moment(elem.End, 'h:mm').format('h:mm a')}</td>
                                        <td>{elem.Location.charAt(0) + elem.Location.substr(1).toLowerCase()}</td>
                                        <td>
                                            <Icon className="save-button" style={{color: "purple"}} onClick={this.onClickSave}>
                                                bookmark_border
                                            </Icon>
                                        </td>
                                    </tr>
                                )
                            }
                        </tr>
                    ))
                }
                </tbody>
            </table>

        )
    }
}