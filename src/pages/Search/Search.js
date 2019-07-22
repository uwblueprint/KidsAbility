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
      daysOfWeek: daysOfWeekOptions[0],
      redirect: false,
      searchId: null,
      recurrence: recurrenceOptions[0],
    };
  }
  componentWillMount = () => {

      //load in the locations
      let locations = [];
      for (const [key, value] of Object.entries(LOCATIONS)) {
          locations.push({value: key, label: value.description});
      }
      this.setState({locations: locations});
      this.setState({location: locations[0]});

      //load in the programs
      let programs = [];
      for (const [key, value] of Object.entries(PROGRAMS)) {
          programs.push({value: key, label: value.description})
      }
      this.setState({programs: programs});
      this.setState({service: programs[0]});
      this.setState({redirect: false});

      //load in clinicians
      this.props.getCliniciansAPI().then((res) => {
          const any_option = {
              value: "Any",
              label: "Any",
              First: "Any",
              Last: "",
          }
          let clinicians = [any_option];
          res.forEach((name) => {
              let value = name._id.First + " " + name._id.Last;
              let option = {
                  value: value,
                  label: value,
                  First: name._id.First,
                  Last: name._id.Last,
              }
              clinicians.push(option);
          });
          this.setState({ clinicians: clinicians });
      });
      //this.props.getScheduleAPI("RHONDA","MACKINNON").then(res => console.log(res)).catch(err => console.log(err));

      let searchId = this.props.hidden.match.params.searchId;

      //Use the id to get the search params
      if (searchId) {
          this.props.getSearchAPI(searchId).then((res) => {
              console.log(res);
              console.log(res[0].names);
              let names = [];
              let services = [];
              for (let i = 0; i < res[0].names.length; i++) {
                  names.push(res[0].names[i][0]);
              }
              for (let i = 0; i < res[0].services.length; i++) {
                  services.push(res[0].services[i][0]);
              }
              this.setState({
                  name: names,
                  service: services,
                  location: res[0].location,
                  time: res[0].time,
                  sessions: res[0].numSessions,
                  timeOfDay: res[0].timeOfDay,
                  recurrence: res[0].recurrence,
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

  handleChange7 = (recurrence) => {
    this.setState({recurrence: recurrence})
    console.log(`Option selected:`, recurrence)
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
    let recurrence = this.state.recurrence;
    let daysOfWeek = this.state.daysOfWeek;

    let info = {
        names,
        services,
        location,
        time,
        numSessions,
        timeOfDay,
        recurrence,
        daysOfWeek,
    }

    //Do some basic error checking
    if (!names || !services || !location || !time || !numSessions || !timeOfDay || !daysOfWeek){
        console.log("Please fill out all fields")
    }
    else {
        this.setState({info: info, redirect: true});
        console.log(this.state.info);
    }
  }


  componentDidUpdate = () => {
      console.log("Component Updating");
      console.log(this.state.redirect);
      if (this.state.info && this.state.redirect){
          console.log("posting search");
          this.props.postSearchAPI(this.state.info).then((res) => {
              console.log(res);
              console.log(res._id);
              this.setState({searchId: res._id});
              console.log(this.state.searchId);
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
      recurrence,
      daysOfWeek,
    } = this.state;

    console.log(this.state.searchId);

    let renderRedirect;
    if (this.state.redirect && this.state.searchId){

        let path = "/view-search/"+this.state.searchId;
        this.props.history.push("/edit-time/"+this.state.searchId);
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
                    value={recurrence}
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
