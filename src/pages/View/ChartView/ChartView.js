import React, {Component} from 'react';
import moment from 'moment';
import Icon from '@material-ui/core/Icon';
import Modal from 'react-modal';
import './ChartView.css';

export default class ChartView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // welcome to unreadable, unfactored, and messy error handling
    // this will be fixed and factored later
    // note that as discussed, the save does not persist on the view page
    // this is temporary
    onClickSave = (e, param) => {
        if (e.target.innerHTML != "bookmark"){
            this.props.postSavedAPI(param);
            e.target.innerHTML = "bookmark";
        }
    }

    render() {
        
        console.log(this.props.data)
        
        return (
            <div>
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
                    { Object.keys(this.props.data).map((key, index) => (
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
                                            <div className="dots">
                                                {elem.Names.map((e, i) =>
                                                    <div className="dot" style={{ backgroundColor: this.props.clinicians[e].color }} key={i}></div>)}
                                            </div>
                                        </td>
                                        <td>
                                            <Icon className="save-button" style={{color: "purple"}} onClick={(e) => this.onClickSave(e, elem)}>
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
        </div>

        )
    }
}