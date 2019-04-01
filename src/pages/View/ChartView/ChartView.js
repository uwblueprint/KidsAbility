import React, {Component} from 'react';
import moment from 'moment';
import Icon from '@material-ui/core/Icon';
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
        console.log(param);
        fetch('/api/saved/',{
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({Name: param.Name, Date: param.Date, Start: param.Start, End: param.End, id: param.id, Location: param.Location})
        })
        .then(res => {
            if (!res.ok){
                if(res.status >= 400 && res.status < 500){
                    return res.json().then(data => {
                        let err = {errMessage: data.message};
                        throw err;
                    })
                } else{
                    let err = {errMessage: "server not responding"};
                    throw err;
                }
            }
            return res.json();
        })
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
                                        <td className="date-and-dot">
                                            {moment(elem.Date).format('MMM D')}
                                            <div className="dot" style={{ backgroundColor: this.props.clinicians[elem.Name].color }}></div>
                                        </td>
                                        <td>{moment(elem.Start, 'h:mm').format('h:mm a')} - {moment(elem.End, 'h:mm').format('h:mm a')}</td>
                                        <td>{elem.Location.charAt(0) + elem.Location.substr(1).toLowerCase()}</td>
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

        )
    }
}