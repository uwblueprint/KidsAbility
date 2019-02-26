import React, {Component} from 'react';
import moment from 'moment';
import ScrollArea from 'react-scrollbar'
import { data } from './data';
import './Saved.css';

export default class Saved extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        console.log(data);

        return (
            <div>
                <h1>Saved Times</h1>
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
                                data.map((elem) =>
                                <tr>
                                    <td>{elem.Date}</td>
                                    <td>{elem.Start} - {elem.End}</td>
                                    <td>{elem.Location.charAt(0) + elem.Location.substr(1).toLowerCase()}</td>
                                    <td>{elem.saved}</td>
                                </tr>)
                            }
                            
                        </table>
                    </div>
                </ScrollArea>
            </div>
        )
    }
}