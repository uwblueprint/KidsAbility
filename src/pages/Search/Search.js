import React, {Component} from 'react';
import Select from 'react-select';
import './Search.css';
import LOCATIONS from '../../constants/locations';
import PROGRAMS from '../../constants/programs'
import {Router, Route, Switch, Redirect, Link} from 'react-router';
import ScrollArea from 'react-scrollbar'

/* Array of { value: location_key, label: location_label } objects */
let LOCATION_OPTIONS = []
for (const [key, value] of Object.entries(LOCATIONS)) {
    LOCATION_OPTIONS.push({value: key, label: value.description})
}

/* Array of { value: program_key, label: program_label } objects */
let PROGRAM_OPTIONS = []
for (const [key, value] of Object.entries(PROGRAMS)) {
    PROGRAM_OPTIONS.push({value: key, label: value.description})
}

const TIME_REQUIRED = [
  {value: 15, label: '15 mins'},
  {value: 30, label: '30 mins'},
  {value: 45, label: '45 mins'},
  {value: 60, label: '60 mins'},
  {value: 120, label: '2 hours'},
  {value: 180, label: '3 hours'},
  {value: 240, label: '4 hours'},
  {value: 480, label: '8 hours'}
]

/*
should this NOT be a dropdown? 
i.e. can the clinician put in ANYTHING?
do clinicians ever book an extremely large number of sessions at once?
or is the max they ever do like 10 or something?
pro for using dropdown: restricts input to only valid inputs
con: limited range
*/
const NUM_SESSIONS = [
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

const recurrenceOptions = [
    {value: "Any", label: "Any"},
    {value: "weekly", label: "Weekly"},
    {value: "bi-weekly", label: "Bi-Weekly"},
    {value: "monthly", label: "Monthly"},
]

/* does this need to be radio buttons? */
const TimeofDay = [
  {value: 'anytime', label: 'Anytime'},
  {value: 'morning', label: 'Morning'},
  {value: 'afternoon', label: 'Afternoon'}
]

const daysOfWeekOptions = [
  {value: 'Monday', label: 'Monday'},
  {value: 'Tuesday', label: 'Tuesday'},
  {value: 'Wednesday', label: 'Wednesday'},
  {value: 'Thursday', label: 'Thursday'},
  {value: 'Friday', label: 'Friday'},
]

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      service: PROGRAM_OPTIONS[0],
      location: LOCATION_OPTIONS[0],
      time: TIME_REQUIRED[1],
      sessions: NUM_SESSIONS[0],
      timeOfDay: TimeofDay[0],
      reccurence: recurrenceOptions[0],
      daysOfWeek: daysOfWeekOptions[0],
      redirect: false,
      searchId: null,
    };
  }
  componentWillMount = () => {
      //load in clinicians
      this.props.getCliniciansAPI().then(clinicians => {
        this.setState({
          clinicians: [
            {
              value: "Any",
              label: "Any",
              First: "Any",
              Last: "",
            },
            ...clinicians.map(c => ({
              value: `${c.FirstName} ${c.LastName}`,
              label: `${c.FirstName} ${c.LastName}`,
              First: c.FirstName,
              Last: c.LastName,
              ID: c.ID,
            })),
          ]
        });
      });
      
      let searchId = this.props.hidden.match.params.searchId;

      //Use the id to get the search params
      if (searchId) {
          this.props.getSearchAPI(searchId).then((res) => {
              console.log(res);
              
              this.setState({
                  name: res.names,
                  service: res.services.map(s => ({ label: PROGRAMS[s].description, value: s })),
                  location: { label: LOCATIONS[res.location].description, value: res.location },
                  time: TIME_REQUIRED.find(o => o.value == res.time),
                  sessions: NUM_SESSIONS.find(o => o.value == res.numSessions),
                  timeOfDay: TimeofDay.find(t => t.value === res.timeOfDay),
                  daysOfWeek: daysOfWeekOptions.find(d => d.value === res.daysOfWeek),
                  //TODO: add recurrence
                  //do we add something here for daysOfWeek?
              })
          });
      }
  }
  handleChange1 = (name) => {
      if (name.length === 0){
          this.setState({name: null});
      } else {
          this.setState({name: name});
      }
      console.log(`Option selected name:`, name)
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
  
  handleChange7 = (reccurence) => {
    this.setState({reccurence: reccurence})
    console.log(`Option selected:`, reccurence)
  }

  handleChange8 = (daysOfWeek) => {
    this.setState({daysOfWeek: daysOfWeek})
    console.log(`Option selected:`, daysOfWeek)
  }

  handleSubmit = () => {
    let names = this.state.name
    if (names != null && this.state.name.map(a => a.value).includes("Any")) {
      //get all names from clinician name drop down except the 1st one ("Any")
      names = this.state.clinicians.slice(1);
    }
    let services = this.state.service;
    let location = this.state.location;
    let time = this.state.time;
    let numSessions = this.state.sessions;
    let timeOfDay = this.state.timeOfDay;
    let daysOfWeek = this.state.daysOfWeek;
    
    let info = {
        names,
        services,
        location,
        time,
        numSessions,
        timeOfDay,
        daysOfWeek,
    }
    
    //Do some basic error checking
    if (!names || !services || !location || !time || !numSessions || !timeOfDay || !daysOfWeek){
        console.log("Please fill out all fields")
        console.log(info);
    }
    else {
        this.setState({info: info, redirect: true});
        console.log(this.state.info);
    }
  }
  
  
  componentDidUpdate = () => {
    if (this.state.info && this.state.redirect){
      const search = {};
      for (let key in this.state.info) {
        if (key === 'names') {
          search['ids'] = this.state.info['names'].map(item => item.ID);
          search['names'] = this.state.info['names'];
        } else if (Array.isArray(this.state.info[key])) {
          search[key] = this.state.info[key].map(item => item.value);
        } else {
          search[key] = this.state.info[key].value;
        }
      }
      this.props.postSearchAPI(search).then((res) => {
        this.setState({searchId: res._id});
      });
    }
  }

  render() {
    
    console.log(this.state.clinicians);
    
    const { 
      name,
      service,
      location,
      time,
      sessions,
      timeOfDay,
      reccurence,
      daysOfWeek,
    } = this.state;
    
    console.log(this.state.searchId);
    
    if (this.state.redirect && this.state.searchId){
        let path = "/view-search/"+this.state.searchId;
        return <Redirect to={path}/>
    }
    
    return (
              <div className="row"> 
                <h1> Find Available Times </h1>
                <div className="column">
                  <div className="headingRow">
                     Clinician Name(s) or ID(s) <font color="red">[Required]</font > 
                  </div>
                  <Select className="dropdown"
                    name="Clinician"
                    isMulti
                    value={name}
                    onChange={this.handleChange1}
                    options={this.state.clinicians}
                  />
                  <div className="headingRow"> Service Type </div>
                  <Select className="dropdown"
                    isMulti
                    value={service}
                    onChange={this.handleChange2}
                    options={PROGRAM_OPTIONS}
                  />
                   <div className="headingRow"> Number of Sessions </div>
                  <Select className="dropdown"
                    value={sessions}
                    onChange={this.handleChange5}
                    options={NUM_SESSIONS}
                  />
                  <div className="headingRow"> Day of the Week </div> 
                  <Select className="dropdown"
                    value={daysOfWeek}
                    onChange={this.handleChange8}
                    options={daysOfWeekOptions}
                  />
                </div>
                <div className="column">
                  <div className="headingColumn"> Min. Time Required </div>
                  <Select className="dropdown"
                    value={time}
                    onChange={this.handleChange4}
                    options={TIME_REQUIRED}
                  />
                  <div className="headingColumn"> Location </div>
                  <Select className="dropdown"
                    value={location}
                    onChange={this.handleChange3}
                    options={LOCATION_OPTIONS}
                  />
                  <div className="headingColumn"> Recurrence </div>
                  <Select className="dropdown"
                    value={reccurence}
                    onChange={this.handleChange7}
                    options={recurrenceOptions}
                  />
                  <div className="headingColumn"> Time of Day </div>
                  <Select className="dropdown"
                    value={timeOfDay}
                    onChange={this.handleChange6}
                    options={TimeofDay}
                  />
                  <button 
                      className="button" 
                      onClick={this.handleSubmit}>
                      Search
                  </button>
                </div>
      </div>
    );
  }
};
