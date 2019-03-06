import React, {Component} from 'react';
import Select from 'react-select';
import './Search.css';
import LOCATIONS from '../../constants/locations';

const options1 = [
  {value: 'bob', label: 'Bob'},
  {value: 'joe', label: 'Joe'},
  {value: 'billy', label: 'Billy'}
]

const options2 = [
  {value: 'blue', label: 'Blue'},
  {value: 'yellow', label: 'Yellow'},
  {value: 'red', label: 'Red'}
]

const options3 = [
  {value: 'blue', label: 'Blue'},
  {value: 'yellow', label: 'Yellow'},
  {value: 'red', label: 'Red'}
]

const options4 = [
  {value: 30, label: '30 mins'},
  {value: 45, label: '45 mins'},
  {value: 60, label: '60 mins'}  
]

{/*
should this NOT be a dropdown? 
i.e. can the clinician put in ANYTHING?
do clinicians ever book an extremely large number of sessions at once?
  or is the max they ever do like 10 or something?
pro for using dropdown: restricts input to only valid inputs
con: limited range
*/}
const options5 = [
  {value: 1, label: '1'},
  {value: 2, label: '2'},
  {value: 3, label: '3'},
  {value: 4, label: '4'},
  {value: 5, label: '5'},
  {value: 6, label: '6'},
  {value: 7, label: '7'},
  {value: 8, label: '8'},
  {value: 9, label: '9'},
  {value: 10, label: '10'}
]

{/* does this need to be radio buttons? */}
const options6 = [
  {value: 'morning', label: 'Morning'},
  {value: 'afternoon', label: 'Afternoon'}
]

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      service: null,
      location: null,
      time: null,
      sessions: null,
      timeOfDay: null
    };
  }
  componentWillMount = () => {
      let loc = [];
      for (const [key, value] of Object.entries(LOCATIONS)) {
          console.log(key, value);
          loc.push({value: key, label: value.description});
      }   
      console.log(loc);
      this.setState({loca: loc});
  }
  
  handleChange1 = (name) => {
    this.setState({name: name})
    console.log(`Option selected:`, name)
  }

  handleChange2 = (service) => {
    this.setState({service: service})
    console.log(`Option selected:`, service)
  }

  handleChange3 = (location) => {
    this.setState({location: location})
    console.log(`Option selected:`, location)
  }

  handleChange4 = (time) => {
    this.setState({time: time})
    console.log(`Option selected:`, time)
  }

  handleChange5 = (sessions) => {
    this.setState({sessions: sessions})
    console.log(`Option selected:`, sessions)
  }

  handleChange6 = (timeOfDay) => {
    this.setState({timeOfDay: timeOfDay})
    console.log(`Option selected:`, timeOfDay)
  }

  handleSubmit = () => {
    //alert('Search criteria was submitted')
    this.props.callAPI("RHONDA","MACKINNON").then(res => console.log(res)).catch(err => console.log(err))
    // make request to backend/db based on form input (get the input from this.state)
  }

  render() {
     
     
     console.log(this.state.loca);
     console.log(options5);
;     //this.props.callAPI("One", " Two").then(res => console.log(res)).catch(err => console.log(err))
    //console.log(this.state.reponse);
    
    this.handleSubmit();
    
    const { 
      name,
      service,
      location,
      time,
      sessions,
      timeOfDay
    } = this.state;
    return (
      <div className="row"> 
        <h1> Find Available Times </h1>
        <div className="column">
          Clinician Name/ID 
          <Select className="leftdropdown"
            name="Clincian"
            isMulti
            value={name}
            onChange={this.handleChange1}
            options={options1}
          />
          Service
          <Select className="leftdropdown"
            isMulti
            value={service}
            onChange={this.handleChange2}
            options={this.state.loca}
          />
          Location
          <Select className="leftdropdown"
            value={location}
            onChange={this.handleChange3}
            options={this.state.loca}
          />
        </div>
        <div className="column">
          Min. Time Required
          <Select className="rightdropdown"
            value={time}
            onChange={this.handleChange4}
            options={options4}
          />
          Number of Sessions
          <Select className="rightdropdown"
            value={sessions}
            onChange={this.handleChange5}
            options={options5}
          />
          Time of Day
          <Select className="rightdropdown"
            value={timeOfDay}
            onChange={this.handleChange6}
            options={options6}
          />
          <form ref="form" onSubmit={this.handleSubmit}>
            <button className="button">Search</button>
          </form>
        </div>
      </div>
    );
  }
};