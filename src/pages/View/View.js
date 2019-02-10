import React, {Component} from 'react';
import ChartView from './ChartView/ChartView';
import CalendarView from './CalendarView/CalendarView';
import './View.css';

export default class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'chart',
        };
    }

    toggleView = (e) => {
        this.setState({ view: e.target.value });
    }

    render() {  
        return (
            <div className="container">
                <h2>Available Times</h2>
                <button
                    onClick={this.toggleView}
                    data={this.props.data}
                    disabled={this.state.view === 'chart'}
                    value="chart"
                >
                    Chart View
                </button>
                <button
                    onClick={this.toggleView}
                    data={this.props.data}
                    disabled={this.state.view === 'calendar'}
                    value="calendar"
                >
                    Calendar View
                </button>
                {this.state.view === 'chart' ? <ChartView /> : <CalendarView />}
            </div>
        );
    }
}