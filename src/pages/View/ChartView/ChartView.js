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
        return (
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Location</th>
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
                                        {console.log(this.props.clinicians)}
                                        {console.log(elem)}
                                        <td className="date-and-dot">
                                            {moment(elem.Date).format('MMM D')}
                                            <div className="dot" style={{ backgroundColor: this.props.clinicians[elem.id].color }}></div>
                                        </td>
                                        <td>{moment(elem.Start, 'h:mm').format('h:mm a')} - {moment(elem.End, 'h:mm').format('h:mm a')}</td>
                                        <td>{elem.Location.charAt(0) + elem.Location.substr(1).toLowerCase()}</td>
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

        )
    }
}