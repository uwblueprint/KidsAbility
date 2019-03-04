import React, {Component} from 'react';
import ChartView from './ChartView/ChartView';
import CalendarView from './CalendarView/CalendarView';
import './View.css';
import moment from 'moment';
import BigCalendar from 'react-big-calendar'

const localizer = BigCalendar.momentLocalizer(moment)

export default class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'chart'
        };
    }

    toggleView = (e) => {
        this.setState({view: e.target.value});
    }

    render() {

        let myEventsList = [];
        let event1 = {
            title: "Testing",
            start: new Date(),
            end: new Date(),
            "allDay?": true,
            "resource?": "Hello"
        }
        myEventsList.push(event1);

        return (
            <div className="view">
                <div>
                    <h2>Available Times</h2>
                    <button
                        onClick={this.toggleView}
                        data={this.props.data}
                        disabled={this.state.view === 'chart'}
                        value="chart">
                        Chart View
                    </button>
                    <button
                        onClick={this.toggleView}
                        data={this.props.data}
                        disabled={this.state.view === 'calendar'}
                        value="calendar">
                        Calendar View
                    </button>
                    {
                        this.state.view === 'chart'
                            ? <ChartView/>
                            : <CalendarView/>
                    }
                    {/* <div className="box">
                        <BigCalendar
                            localizer={localizer}
                            events={myEventsList}
                            startAccessor="start"
                            endAccessor="end"/>
                    </div> */}
                </div>
            </div>
        );
    }
}