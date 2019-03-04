import React, {Component} from 'react';
import ChartView from './ChartView/ChartView';
import CalendarView from './CalendarView/CalendarView';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import './View.css';

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
        return (
            <div className="view">
                <div>
                    <h2 className="heading2">Available Times</h2>
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
                </div>
            </div>
        );
    }
}