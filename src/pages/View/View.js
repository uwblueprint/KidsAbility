import React, {Component} from 'react';
import ChartView from './ChartView/ChartView';
import CalendarView from './CalendarView/CalendarView';
import ScrollArea from 'react-scrollbar'
import './View.css';
import moment from 'moment';
import BigCalendar from 'react-big-calendar'
import events from './events'
import dates from './dates'

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

        let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

        let myEventsList = [];
        let event1 = {
            title: "Testing",
            start: new Date(),
            end: new Date(),
            "allDay?": true,
            "resource?": "Hello"
        }
        myEventsList.push(event1);

        return (<div >

            {/*}
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
            */} {/*
            steps: controls the length of the calendar

            */
            }
            <ScrollArea
                speed={0.8}
                className="area"
                contentClassName="content"
                horizontal={false}>
                <div className="box">
                    <BigCalendar
                        events={events}
                        views={["week", "day", "agenda"]}
                        min={new Date(2018, 10, 0, 8, 0, 0)}
                        max={new Date(2018, 10, 0, 20, 0, 0)}
                        step={30}
                        timeslots={1}
                        showMultiDayTimes={true}
                        defaultDate={new Date(2015, 3, 1)}
                        localizer={localizer}
                        defaultView={BigCalendar.Views.DAY}></BigCalendar>
                </div>
            </ScrollArea>
        </div>

        );
    }
}