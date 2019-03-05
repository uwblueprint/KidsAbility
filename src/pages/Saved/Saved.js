import React, {Component} from 'react';
import moment from 'moment';
import ScrollArea from 'react-scrollbar'
import { data } from './data';
import './Saved.css';
import Icon from '@material-ui/core/Icon';
import Modal from 'react-responsive-modal';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default class Saved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    openNotes = () => {
        this.setState({open: true})
    }

    closeNotes = () => {
        this.setState({open: false})
    }

    toggleSave = (event) => {
        event.target.innerHTML = (event.target.innerHTML === "bookmark") ? "bookmark_border" : "bookmark"
    }

    render() {
        const { open } = this.state;
        console.log(data);

        return (
            <div class="content">
                <h1>Saved Times</h1>
                <ScrollArea
                    speed={0.8}
                    className="area"
                    contentClassName="content"
                    horizontal={false}
                    style={{ height: "300px" }}
                >
                    <div >                
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
                        
                            {
                                data.map((elem) =>
                                <tr>
                                    <td>{elem.FirstNaMe}</td>
                                    <td>{elem.ID}</td>
                                    <td>{elem.Date}</td>
                                    <td>{elem.Start} - {elem.End}</td>
                                    <td>{elem.Location.charAt(0) + elem.Location.substr(1).toLowerCase()}</td>
                                    <td>
                                        <Icon>
                                            event_note
                                        </Icon>
                                        <Icon onClick={this.openNotes}>
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
                                        <Icon style={{color:'purple'}} onClick={this.toggleSave}> 
                                            bookmark
                                        </Icon>
                                    </td>
                                </tr>)
                            }
                            
                        </table>
                    </div>
                </ScrollArea>
                {/* <TextField style={{color:'white'}}
                    id="filled"
                    defaultValue="Reminder: Please do not include a client's name, birthdate, and/or any personal identifiers in your notes."
                    variant="filled"
                    // fullWidth="true"
                    rows="3"
                /> */}
                <Paper className="reminder" elevation={10}>
                    <Typography variant="h5" component="h3">
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