import React, {Component} from 'react';
import moment from 'moment';
import ScrollArea from 'react-scrollbar'
import { data } from './data';
import './Saved.css';
import Icon from '@material-ui/core/Icon';

export default class Saved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: false
        };
    }

    showNotes = (notes) => {
        this.setState({notes: !notes})
        console.log(`Toggle show notes to:`, notes)
    }

    toggleSave = (event) => {
        event.target.innerHTML = (event.target.innerHTML === "bookmark") ? "bookmark_border" : "bookmark"
    }

    render() {

        console.log(data);

        return (
            <div>
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
                                        <Icon onClick={this.showNotes}>
                                            keyboard_arrow_down
                                        </Icon>
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
            </div>
        )
    }
}