import React, {Component} from 'react';
import moment from 'moment';
import Icon from '@material-ui/core/Icon';
import './ChartView.css';

export default class ChartView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onClickSave = (e) => {
        e.target.innerHTML = (e.target.innerHTML === "bookmark") ? "bookmark_border" : "bookmark";
    }

    render() {
        console.log(this.props.data);
        console.log(this.props.clinicians);
        return (
            <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th className="wide">Time</th>
                        <th>Location</th>
                        <th>Availability</th>
                        <th>Save</th>
                    </tr>
                </thead>
                <tbody>
                    { Object.keys(this.props.data).map((key) => (
                        <tr>
                            <tr>
                                <td className="section-header">{key == 0 ? 'This week' : `In ${key} week${key == 1 ? '' : 's'}`}</td>
                            </tr>
                            {
                                this.props.data[key].map((elem, index) =>
                                    <tr key={index}>
                                        <td>
                                            {moment(elem.Date).format('MMM D')}
                                        </td>
                                        <td className="wide">{moment(elem.Start, 'h:mm').format('h:mm a')} - {moment(elem.End, 'h:mm').format('h:mm a')}</td>
                                        <td>{elem.Location.charAt(0) + elem.Location.substr(1).toLowerCase()}</td>
                                        <td>
                                            <div className="dot" style={{ backgroundColor: this.props.clinicians[elem.Name].color }}></div>
                                        </td>
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