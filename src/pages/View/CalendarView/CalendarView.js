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
    
    componentWillMount = () => {
        let data = this.props.data;
        let Events = [];
        Object.values(data).map((week, index) => {
            for (var j = 0; j < week.length; j++) {
                let elem = week[j];
                Events.push({
                    title: elem.Names,
                    start: moment(elem.Date).hour(elem.Start.split(":")[0]).minute(elem.Start.split(":")[1]).toDate(),
                    end: moment(elem.Date).hour(elem.End.split(":")[0]).minute(elem.End.split(":")[1]).toDate(),
                    "allDay?": false,
                    "resource?": "Hello"
                })
            }
        });
        this.setState({events: Events})
        
    }

    render() {
        let myEventsList = this.state.events;
        
        return (
            <div>
                <ScrollArea>
                    <div className="box">
                <BigCalendar
                    events={myEventsList}
                    views={["week", "day", "agenda"]}
                    min={new Date(2018, 10, 0, 8, 0, 0)}
                    max={new Date(2018, 10, 0, 20, 0, 0)}
                    step={30}
                    timeslots={1}
                    showMultiDayTimes={true}
                    defaultDate={new Date()}
                    localizer={localizer}
                    defaultView={BigCalendar.Views.DAY} />
                </div>
                </ScrollArea>
            </div>
        );
    }
}
