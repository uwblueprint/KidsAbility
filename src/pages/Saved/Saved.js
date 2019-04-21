import React, {Component} from 'react';
import moment from 'moment';
import './Saved.css';
import Icon from '@material-ui/core/Icon';
import Modal from 'react-responsive-modal';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default class Saved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            saved: [],
            currentNote: "No note found",
        };
    }
    componentWillMount(){
        var user = localStorage.getItem('user');
        console.log(user);
        this.setState({user: user});
        this.props.getSavedAPI(user).then((res) => {
            this.setState({saved: res});
        });
    }

    openNotes = (e, elem) => {
        this.setState({currentNote: elem.Note, open: true});
    }

    closeNotes = () => {
        this.setState({open: false})
    }

    onClickUnsave = (event, id) => {
        this.props.deleteSavedAPI(id).then(resp => {
          if(!resp.ok) {
            if(resp.status >=400 && resp.status < 500) {
              return resp.json().then(data => {
                let err = {errorMessage: data.message};
                throw err;
              })
            } else {
              let err = {errorMessage: 'Please try again later, server is not responding'};
              throw err;
            }
          }
          return resp;
        });
        //event.target.innerHTML = (event.target.innerHTML === "bookmark") ? "bookmark_border" : "bookmark";
        const saved = this.state.saved.filter(saved => saved._id !== id);
        this.setState({saved: saved});
    }

    render() {
        const saved = this.state.saved;
        console.log(saved);
        return (
            <div className="content">
                <h1>{"Saved Times (" + this.state.user + ")"}</h1>
                <div id="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Clinician Name</th>
                                <th>Client ID</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Location</th>
                                <th>Notes</th>
                                <th>Unsave</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                
                                saved.map((elem, index) =>
                                <tr key={index}>
                                    <td>{elem.Name}</td>
                                    <td>{elem.id}</td>
                                    <td>{elem.Date}</td>
                                    <td>{elem.Start} - {elem.End}</td>
                                    <td>{elem.Location}</td>
                                    <td>
                                        <Icon style={{color:'#000051'}}>
                                            event_note
                                        </Icon>
                                        <Icon style={{color:'#000051'}} onClick={(e) => this.openNotes(e, elem)}>
                                            keyboard_arrow_down
                                        </Icon>
                                    </td>
                                    <td>
                                        <Icon style={{color:'#E8BF31'}} onClick={(e) => this.onClickUnsave(e, elem._id)}> 
                                            bookmark
                                        </Icon>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                    <Modal open={this.state.open} onClose={this.closeNotes} center classNames={{modal: "customModal", overlay: "customOverlay"}} >
                        <p>{this.state.currentNote}</p>
                    </Modal>
                </div>
                
                <Paper className="reminder">
                    <Typography style={{color:'rgba(0,0,0,0.6)'}} variant="h5" component="h3">
                        <p>
                        <b>Reminder:</b> Please do not include a
                        client's name, birthdate, and/or any 
                        personal identifiers in your notes.
                        </p>
                    </Typography>
                </Paper>
            </div>
        )
    }
}