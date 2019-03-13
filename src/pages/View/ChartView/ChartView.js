import React, {Component} from 'react';
import moment from 'moment';
import { data } from './data';
import Icon from '@material-ui/core/Icon';
import './ChartView.css';

const DAY_START = '8:00';
const DAY_END = '20:00';

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
        const sortedData = data.sort(this.compareFunction);
        const processedData = [];
        sortedData.forEach((elem, index) => {
            if (index === sortedData.length - 1) return;
            // add full day time slots between today and first booked slot (excluding weekends)
            if (index === 0) {
                // commented out for now since all the dates in the current data are before today 

                // let currentDay = moment();
                // while (moment(elem.Date).diff(currentDay, 'days')) {
                //     if (currentDay.day() != 0 && currentDay.day() != 6) {
                //         processedData.push({
                //             Date: currentDay.format('D-MMM-YY'),
                //             Start: DAY_START,
                //             End: DAY_END,
                //             Location: elem.Location,
                //         });
                //     }
                //     currentDay.add(1, 'days');
                // }
            }
            // add time slots between DAY_START and first booked slot of the day
            if ((index === 0 || sortedData[index - 1].Date !== elem.Date) && elem.Start !== DAY_START) {
                processedData.push({
                    Date: elem.Date,
                    Start: DAY_START,
                    End: elem.Start,
                    Location: elem.Location,
                });
            }
            // add time slots in the middle of the day
            if (elem.Date === sortedData[index + 1].Date) {
                processedData.push({
                    Date: elem.Date,
                    Start: elem.End,
                    End: sortedData[index + 1].Start,
                    Location: elem.Location,
                });
            }
            // add time slots between the last booked slot of the day and DAY_END 
            if (sortedData[index + 1].Date !== elem.Date && elem.end !== DAY_END) {
                processedData.push({
                    Date: elem.Date,
                    Start: elem.End,
                    End: DAY_END,
                    Location: elem.Location,
                })
            }
            // add full day time slots between today and next booked slot (excluding weekends)
            let currentDay = moment(elem.Date);
            while (moment(sortedData[index + 1].Date).diff(currentDay, 'days')) {
                if (currentDay.day() != 0 && currentDay.day() != 6) {
                    processedData.push({
                        Date: currentDay.format('D-MMM-YY'),
                        Start: DAY_START,
                        End: DAY_END,
                        Location: elem.Location,
                    });
                }
                currentDay.add(1, 'days');
            }
        });

        processedData.forEach(elem => {
            let key = (moment().diff(elem.Date, 'weeks')) * -1;
            if (groupedData[key]) {
                groupedData[key].push(elem);
            } else {
                groupedData[key] = [];
                groupedData[key].push(elem);
            }
        });

        return (
            <div className="table">
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
                    { Object.keys(groupedData).map((key) => (
                        <tr>
                            <tr>
                                <td className="section-header">{key == 0 ? 'This week' : `In ${key} week${key == 1 ? '' : 's'}`}</td>
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
                    )) }
                </tbody>
            </table>
        </div>

        )
    }
}