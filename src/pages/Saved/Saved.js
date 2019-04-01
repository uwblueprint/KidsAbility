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
            saved: []
        };
    }

    async loadData(){
        let saved = await fetch("api/saved/")
        .then(resp => {
            if (!resp.ok){
                if(resp.status >= 400 && resp.status < 500){
                    return resp.json().then(data => {
                        let err = {errMessage: data.message};
                        throw err;
                    })
                } else{
                    let err = {errMessage: "server not responding"};
                    throw err;
                }
            }
            return resp.json();
        });
        this.setState({saved});
    }

    componentWillMount(){
        this.loadData();
    }

    openNotes = () => {
        this.setState({open: true})
    }

    closeNotes = () => {
        this.setState({open: false})
    }

    onClickUnsave = (event, id) => {
        fetch("/api/saved/"+id, {
            method: 'delete'
        })
        .then(resp => {
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
          return resp.json();
        });
        event.target.innerHTML = (event.target.innerHTML === "bookmark") ? "bookmark_border" : "bookmark";
        const saved = this.state.saved.filter(saved => saved._id !== id);
        this.setState({saved: saved});
    }

    render() {
        const { open } = this.state;
        const saved = this.state.saved;

        return (
            <div class="content">
                <h1>Saved Times</h1>
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
                                
                                saved.map((elem) =>
                                <tr key={elem._id}>
                                    <td>{elem.Name}</td>
                                    <td>{elem.id}</td>
                                    <td>{elem.Date}</td>
                                    <td>{elem.Start} - {elem.End}</td>
                                    <td>{elem.Location}</td>
                                    <td>
                                        <Icon style={{color:'#000051'}}>
                                            event_note
                                        </Icon>
                                        <Icon style={{color:'#000051'}} onClick={this.openNotes}>
                                            keyboard_arrow_down
                                        </Icon>
                                        <Modal open = {open} onClose={this.closeNotes} center>
                                            <h2>Simple centered modal</h2>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                                pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                                                hendrerit risus, sed porttitor quam.
                                            </p>
                                        </Modal>
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