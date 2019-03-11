import React, {Component} from 'react';
import ChartView from './ChartView/ChartView';
import CalendarView from './CalendarView/CalendarView';
import ScrollArea from 'react-scrollbar'
import './View.css';
import moment from 'moment';
import BigCalendar from 'react-big-calendar'
import {Router, Route, Switch, Redirect, Link} from 'react-router';

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
    
    componentWillMount = () => {
        
        let info = {
            name: [
                    {value: "AMY WETTLAUFER", label: "AMY WETTLAUFER", First: "AMY", Last: "WETTLAUFER"},
                    {value: "JILL VILLAR", label: "JILL VILLAR", First: "JILL", Last: "VILLAR"},
                ],
            services: [
                        {value: "ABA-ABA", label: "ABA-ABA"},
                        {value: "ACS-MAIN", label: "ACS-MAIN"},
                    ],
            location: {value: "ALEXDC", label: "W-Alexandra Day Care"},
            numSessions: {value: 1, label: "1"},
            time: {value: 30, label: "30 mins"},
            timeOfDay: {value: "anytime", label: "AnyTime"},
        }
        
        info.name.forEach(name => {
            this.props.getScheduleAPI(name.First, name.Last).then(res => console.log(res)).catch(err => console.log(err));
        });
        
        
    }

    render() {
        
        return (
            <div className="view">
                <div>
                    <h2 className="heading2">Available Times</h2>
                    <button
                        className="button-find"
                        onClick={this.toggleView}
                        data={this.props.data}
                        disabled={this.state.view === 'chart'}
                        value="chart">
                        Chart View
                    </button>
                    <button
                        className="button-find"
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
                </div>
            </div>
        );
    }
}