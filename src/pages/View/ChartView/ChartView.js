import React, {Component} from 'react';
import moment from 'moment';
import Icon from '@material-ui/core/Icon';
import Modal from 'react-modal';
import './ChartView.css';




const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
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
        var param = this.state.param;
        var note = (this.state.note === "") ? "No note has been added for this time." : this.state.note;
        var user = localStorage.getItem('user');
        var save_obj = {
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

    openModal = () => {
       this.setState({modalIsOpen: true});
     }

    closeModal = () => {
       this.setState({modalIsOpen: false});
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
                        <th>Time</th>
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
                                        <td className="time-heading">{moment(elem.Start, 'h:mm').format('h:mm a')} - {moment(elem.End, 'h:mm').format('h:mm a')}</td>
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
                        </tbody>
                    )) }
                </div>
            </table>
        </div>
        <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel="Save A Note"
              style={customStyles}
              classNames="modal"
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
                    <button type="submit" value="Submit" className="toggle-button">Save Time</button>
                </div>
            </form>
        </Modal>
        </div>

        )
    }
}
