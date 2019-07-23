import React, {Component} from 'react';
import moment from 'moment';
import Icon from '@material-ui/core/Icon';
import Modal from 'react-modal';
import './ChartView.css';

const customStyles = {
  content: {
    top         : '50%',
    left        : '50%',
    right       : 'auto',
    bottom      : 'auto',
    marginRight : '-50%',
    transform   : 'translate(-50%, -50%)'
  }
};

export default class ChartView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIdOpen: false,
            note: "",
            param: {}
        };
    }

    onClickSave = (e, param) => {
        if (e.target.innerHTML !== "bookmark"){
            this.setState({modalIsOpen: true, param: param})
            e.target.innerHTML = "bookmark";
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const param = this.state.param;
        const note = (this.state.note === "") ? "No note has been added for this time." : this.state.note;
        const user = localStorage.getItem('user');
        const save_obj = {
            Name: param.Names,
            Date: param. Date,
            Start: param.Start,
            End: param.End,
            id: param.id,
            Location: param.Location,
            Note: note,
            User: user,
        }

        this.props.postSavedAPI(save_obj);
        this.setState({
            modalIsOpen: false,
            note: "",
            param: {}
        })
    }

    handleChange = (e) => {
        this.setState({note: e.target.value})
    }

    closeModal = () => {
       this.setState({modalIsOpen: false});
     }

    render() {
        const {open} = this.state;

        let rows = [];
        for (let key in this.props.data) {
            rows.push(
                <tr key={key * 1000}>
                    <td className="section-header">
                        {key === "0" ? "This week" : `In ${key} week${key === "1" ? "" : "s"}`}
                    </td>
                </tr>
            )
            for (let i in this.props.data[key]) {
                const elem = this.props.data[key][i]
                rows.push(
                    <tr key={"" + key + i}>
                        <td>{moment(elem.Date, 'DD-MMM-YY').format('MMM D')}</td>
                        <td className="wide">{moment(elem.Start, 'h:mm').format('h:mm a')} - {moment(elem.End, 'h:mm').format('h:mm a')}</td>
                        <td>{elem.Location.charAt(0) + elem.Location.substr(1).toLowerCase()}</td>
                        <td>
                            <div className="dots">
                                {elem.Names.map((e, i) =>
                                    <div className="dot" style={{ backgroundColor: this.props.clinicians[e].color }} key={i}></div>)}
                            </div>
                        </td>
                        <td>
                            <Icon className="save-button" style={{ color: "purple" }} onClick={(e) => this.onClickSave(e, elem)}>
                                bookmark_border
                            </Icon>
                        </td>
                    </tr>
                )
            }
        }

        return (
            <div>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Location</th>
                                <th>Availability</th>
                                <th>Save</th>
                            </tr>
                        </thead>
                        <tbody>
                            { rows }
                        </tbody>
                    </table>
                </div>
                <Modal isOpen={this.state.modalIsOpen}
                       onRequestClose={this.closeModal}
                       contentLabel="Save A Note"
                       style={customStyles}
                       classNames="modal">
                    <form onSubmit={this.handleSubmit}>
                        <label>Clinician Notes:</label>
                        <div>
                            <textarea name="notes" value={this.state.note} onChange={this.handleChange} className="notebox" rows="4" />
                        </div>
                        <div className="save-button-container">
                            <button type="submit" value="Submit" className="toggle-button">Save Time</button>
                        </div>
                    </form>
                </Modal>
            </div>
        )
    }
}
