import React, {Component} from 'react';
import '../View.css';
import moment from 'moment';
import BigCalendar from 'react-big-calendar'
import events from './events'
import dates from './dates'
import ScrollArea from 'react-scrollbar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './CalendarView.css';

const localizer = BigCalendar.momentLocalizer(moment)

export default class CalendarView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
            <div>
                <ScrollArea>
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