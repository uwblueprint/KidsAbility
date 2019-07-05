import React, {Component} from 'react';
import moment from 'moment';
import Icon from '@material-ui/core/Icon';
import Modal from 'react-modal';
import './ChartView.css';

export default class ChartView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            note: "",
            param: {}
        };

        this.close = this.close.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onClickSave = (e, param) => {
        if (e.target.innerHTML !== "bookmark"){
            this.setState({open: true, param: param})
            e.target.innerHTML = "bookmark";
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        var param = this.state.param;
        var note = (this.state.note === "") ? "No note has been added for this time." : this.state.note;
        console.log(note);
        var save_obj = {
            Name: param.Names,
            Date: param. Date,
            Start: param.Start,
            End: param.End,
            id: param.id,
            Location: param.Location,
            Note: note
        }
        this.props.postSavedAPI(save_obj);
        this.setState({
            open: false,
            note: "",
            param: {}
        })
    }

    handleChange(e) {
        this.setState({note: e.target.value})
    }

    close = () => {
        this.setState({open: false});
    }

    render() {
        const {open} = this.state;
        
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
                <div className="table-content">
                    { Object.keys(this.props.data).map((key, index) => (
                        <tbody key={key}>
                            <tr>
                                <td className="section-header">{key === 0 ? 'This week' : `In ${key} week${key === 1 ? '' : 's'}`}</td>
                            </tr>
                            {
                                this.props.data[key].map((elem, index) =>
                                    <tr key={index}>
                                        <td>
                                            {moment(elem.Date, 'DD-MMM-YY').format('MMM D')}
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
                                            <Modal
                                                open = {open}
                                                onClose={this.close}
                                                center
                                                classNames={{modal: "customModal", overlay: "customOverlay"}} 
                                            >
                                                <form onSubmit={this.handleSubmit}>
                                                    <label>
                                                        Clinician Notes:
                                                    </label>
                                                    <div>
                                                        <textarea name="notes" value={this.state.note} 
                                                            onChange={this.handleChange} className="notebox" rows="4" 
                                                        />
                                                    </div>
                                                    <div className="save-button-container">
                                                        <button type="submit" value="Submit" className="save-note">Save Time</button>
                                                    </div>
                                                </form>
                                            </Modal>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    )) }
                </div>
            </table>
        </div>
        </div>

        )
    }
}
