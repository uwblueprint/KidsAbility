import React, {Component} from 'react';
import ChartView from './ChartView/ChartView';
import CalendarView from './CalendarView/CalendarView';
import moment from 'moment';
import { data } from './data.js';
import './View.css';

const DAY_START = '8:00';
const DAY_END = '20:00';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// compare function to sort time slots
const compareFunction = (a, b) => {
    if (moment(a.Date) < moment(b.Date)) return -1;
    if (moment(b.Date) < moment(a.Date)) return 1;
    if (a.Start < b.Start) return -1;
    if (b.Start < a.Start) return 1;
    return 0;
}

// create an array of available times grouped by weeks
const processData = (data) => {
    const sortedData = data
        .flatMap(x => x)
        .sort(compareFunction);
    const availableTimes = getAvailableTimes(sortedData);
    const groupedData = {};
    availableTimes.forEach(elem => {
        let key = (moment().diff(elem.Date, 'weeks')) * -1;
        if (groupedData[key]) {
            groupedData[key].push(elem);
        } else {
            groupedData[key] = [];
            groupedData[key].push(elem);
        }
    });
    return groupedData;
}

// find available times from booked times returned from mongo
const getAvailableTimes = (sortedData) => {
    console.log(sortedData);
    const availableTimes = [];
    sortedData.forEach((elem, index) => {
        if (index === sortedData.length - 1) return;
        // add full day time slots between today and first booked slot (excluding weekends)
        if (index === 0) {
            // commented out for now since all the dates in the current data are before today 

            // let currentDay = moment();
            // while (moment(elem.Date).diff(currentDay, 'days')) {
            //     if (currentDay.day() != 0 && currentDay.day() != 6) {
            //         availableTimes.push({
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
            availableTimes.push({
                id: elem.ID,
                Name: `${elem.FirstNaMe} ${elem.LastName}`,
                Date: elem.Date,
                Start: DAY_START,
                End: elem.Start,
                Location: elem.Location,
            });
        }
        // add time slots in the middle of the day
        if (elem.Date === sortedData[index + 1].Date) {
            availableTimes.push({
                id: elem.ID,
                Name: `${elem.FirstNaMe} ${elem.LastName}`,
                Date: elem.Date,
                Start: elem.End,
                End: sortedData[index + 1].Start,
                Location: elem.Location,
            });
        }
        // add time slots between the last booked slot of the day and DAY_END 
        if (sortedData[index + 1].Date !== elem.Date && elem.end !== DAY_END) {
            availableTimes.push({
                id: elem.ID,
                Name: `${elem.FirstNaMe} ${elem.LastName}`,
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
                availableTimes.push({
                    id: elem.ID,
                    Name: `${elem.FirstNaMe} ${elem.LastName}`,
                    Date: currentDay.format('D-MMM-YY'),
                    Start: DAY_START,
                    End: DAY_END,
                    Location: elem.Location,
                });
            }
            currentDay.add(1, 'days');
        }
    });
    return availableTimes;
}

export default class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'chart'
        };
        this.clinicians = {};
        data.forEach((elem, index) => {
            this.clinicians[elem[0].ID] = {
                name: `${elem[0].FirstNaMe} ${elem[0].LastName}`,
                color: colors[index],
            }
        });
        this.data = processData(data);
    }

    toggleView = (e) => {
        this.setState({view: e.target.value});
    }

    render() {
        return (
            <div className="view">
                <div>
                    <div className="header">
                        <h2 className="heading2">Available Times</h2>
                        <div className="toggle-buttons">
                            <button
                                className="toggle-button"
                                onClick={this.toggleView}
                                data={this.props.data}
                                disabled={this.state.view === 'chart'}
                                value="chart">
                                Chart View
                            </button>
                            <button
                                className="toggle-button"
                                onClick={this.toggleView}
                                data={this.props.data}
                                disabled={this.state.view === 'calendar'}
                                value="calendar">
                                Calendar View
                            </button>
                        </div>
                    </div>
                    <div className="clinicians-list">
                        {Object.values(this.clinicians).map((elem, index) =>
                        <div className="clinician" key={index}>
                            <div className="dot" style={{ backgroundColor: elem.color }}></div>
                            {elem.name}
                        </div>)}
                    </div>
                    {
                        this.state.view === 'chart'
                            ? <ChartView data={this.data} clinicians={this.clinicians} />
                            : <CalendarView/>
                    }
                </div>
            </div>
        );
    }
}