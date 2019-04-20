import React, {Component} from 'react';
import moment from 'moment';
import Icon from '@material-ui/core/Icon';
import './ChartView.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

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
            modalIsOpen: false
        };

    }

    // welcome to unreadable, unfactored, and messy error handling
    // this will be fixed and factored later
    // note that as discussed, the save does not persist on the view page
    // this is temporary
    onClickSave = (e, param) => {
        if (e.target.innerHTML != "bookmark"){
            console.log(param);
            this.props.postSavedAPI(param);
            this.setState({modalIsOpen: true});
            e.target.innerHTML = "bookmark";
        }
    }
    
    openModal = () => {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

    render() {
        
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
            <Modal
                  isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                <p> Display the time and the notes section here </p>
            </Modal>
        </div>
        </div>

        )
    }
}