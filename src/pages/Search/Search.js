import React, {Component} from 'react';
import Select from 'react-select';
import './Search.css';

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
  {value: 'thiry', label: '30 mins'},
  {value: 'fourty_five', label: '45 mins'},
  {value: 'sixty', label: '60 mins'}  
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
  {value: 'one', label: '1'},
  {value: 'two', label: '2'},
  {value: 'three', label: '3'},
  {value: 'four', label: '4'},
  {value: 'five', label: '5'},
  {value: 'six', label: '6'},
  {value: 'seven', label: '7'},
  {value: 'eight', label: '8'},
  {value: 'nine', label: '9'},
  {value: 'ten', label: '10'}
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

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit = (e) => {
    alert('Search criteria was submitted')
    // make request to backend/db based on form input (get the input from this.state)
  }
  
  render() {
    const { 
      name,
      service,
      location,
      time,
      sessions,
      timeOfDay
    } = this.state;
    return (
      <div class="row"> 
        <h1> Find Available Times </h1>
        <div class="column">
          Clinician Name/ID 
          <Select className="leftdropdown"
            isMulti
            value={name}
            onChange={this.handleChange1}
            options={options1}
          />
          Service type
          <Select className="leftdropdown"
            isMulti
            value={service}
            onChange={this.handleChange2}
            options={options2}
          />
          Location
          <Select className="leftdropdown"
            value={location}
            onChange={this.handleChange3}
            options={options3}
          />
        </div>
        <div class="column">
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
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    );
  }
};