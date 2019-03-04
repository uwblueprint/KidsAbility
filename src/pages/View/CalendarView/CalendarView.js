import React, {Component} from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';

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
            <div className="box">
                <BigCalendar
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"/>
            </div>
        );
    }
}