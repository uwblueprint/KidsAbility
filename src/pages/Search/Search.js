import React, {Component} from 'react';
import Select from 'react-select';
import './Search.css';
import LOCATIONS from '../../constants/locations';
import PROGRAMS from '../../constants/programs'
import {Router, Route, Switch, Redirect, Link} from 'react-router';
import ScrollArea from 'react-scrollbar';
// these imports are for the calendars
//import {LinkedCalendar, DayPicker, DatePicker} from 'rb-datepicker';
import MultiDayCalendar from 'react-calendar-multiday';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Popup from "reactjs-popup";
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";
//import 'bootstrap-daterangepicker/daterangepicker.css';

const options4 = [
  {value: 15, label: '15 mins'},
  {value: 30, label: '30 mins'},
  {value: 45, label: '45 mins'},
  {value: 60, label: '60 mins'},
  {value: 120, label: '2 hours'},
  {value: 180, label: '3 hours'},
  {value: 240, label: '4 hours'},
  {value: 480, label: '8 hours'}
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

const recurrenceOptions = [
    {value: "Any", "label": "Any"},
    {value: "weekly", "label": "Weekly"},
    {value: "bi-weekly", "label": "Bi-Weekly"},
    {value: "monthly", "label": "Monthly"},
]

{/* does this need to be radio buttons? */}
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

const selectDatesOptions = [
  {value: 'dayOfWeek', label: 'By Day Of Week'},
  {value: 'individualDates', label: 'By Individual Dates'},
  {value: 'dateRange', label: 'By Date Range (i.e. consecutive days)'},
]

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      service: PROGRAMS[0],
      location: LOCATIONS[0],
      time: options4[1],
      sessions: options5[0],
      timeOfDay: TimeofDay[0],
      redirect: false,
      searchId: null,
      reccurence: recurrenceOptions[0],
      daysOfWeek: daysOfWeekOptions[0],
      selectDates: selectDatesOptions[0],
      selectedDates:[],
      from: undefined,
      to: undefined,
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
      this.setState({selectedDates: []});
      this.setState({from: undefined});
      this.setState({to: undefined});
      
      //load in the programs
      let programs = [];
      for (const [key, value] of Object.entries(PROGRAMS)) {
          programs.push({value: key, label: value.description})
      }
      this.setState({programs: programs});
      this.setState({service: programs[0]});
      
      //load in clinicians
      this.props.getCliniciansAPI().then((res) => {
           let clinicians = [];
           let any_option = {
                value: "Any",
                label: "Any",
                First: "Any",
                Last: "",
              }
               clinicians.push(any_option);
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
          this.setState({clinicians: clinicians});
      });
      
      let searchId = this.props.hidden.match.params.searchId;
      console.log(searchId);
      //Use the id to get the search params
      if (searchId) {
          this.props.getSearchAPI(searchId).then((res) => {
              console.log(res);
              console.log(res[0].names);
              
              let names = 
              this.setState({
                  name: res[0].names[0],
                  service: res[0].services[0],
                  location: res[0].location,
                  time: res[0].time,
                  sessions: res[0].numSessions,
                  timeOfDay: res[0].timeOfDay,
                  //TODO: add recurrence
                  //do we add something here for daysOfWeek?
              })
        
          });
      }
  }
  handleDateOptionDisplay = (selectedDateValue) => {
    console.log("YOLO");
    console.log('selectDateObject ' + selectedDateValue);
    console.log(typeof selectedDateValue);
    const {from, to} = this.state;
    const modifiers = {start: from, end: to};
    if (selectedDateValue === undefined) return;
    console.log('dateOption Choice ' + selectedDateValue);
    //trigger={<button> Trigger</button>}
    if (selectedDateValue === 'dayOfWeek') {
        return (
            <>
              <div className="headingRow"> Day of the Week </div>
              <Popup open = {selectedDateValue === 'dayOfWeek'} position="right center">
                  <Select className="dropdown"
                    value={this.state.daysOfWeek}
                    onChange={this.handleChange8}
                    options={daysOfWeekOptions}
                  />
              </Popup>

            </>
        );
      } else if (selectedDateValue === 'individualDates') {
        return (
              <Popup open = {selectedDateValue === 'individualDates'} position="right center">
                  <DayPicker selectedDays={this.state.selectedDates} onDayClick={this.onIndividualDatesChange} />
                  <button className="link" onClick={this.onResetRangeDatesClick}>
                    Reset Dates
                  </button>
              </Popup>

        );
      } else {
        return (
            <>
                <DayPicker className = "Selectable" selectedDays={[from, {from, to}]}
                modifiers={modifiers} onDayClick = {this.onRangeDatesChange} />
                <button className="link" onClick={this.onResetRangeDatesClick}>
                    Reset Range
                </button>
            </>
            //<LinkedCalendar onDatesChange={this.onDatesChange} showDropdowns={false} />
        );
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

  //for calendars
  onRangeDatesChange = (day) => {
    const dateRange = DateUtils.addDayToRange(day, this.state);
    this.setState(dateRange);
  }
  onResetRangeDatesClick = () => {
    console.log('Potatoes');
    console.log(this.state);
    this.setState({selectedDates: []});
  }
  onResetIndividualDatesClick = () => {
      console.log(this.state);
      this.setState({from: undefined, to: undefined});
    }
  onIndividualDatesChange = (day, {selected}) => {
      console.log('individual day selection');
      console.log(day, {selected});
      const { selectedDates } = this.state;
          if (selected) {
            const selectedIndex = selectedDates.findIndex(selectedDate =>
              DateUtils.isSameDay(selectedDate, day)
            );
            selectedDates.splice(selectedIndex, 1);
          } else {
            selectedDates.push(day);
          }
          this.setState({ selectedDates });
  }
  //selects which date selection type you want i.e. the type of calendar
  // stores it in selectDates
  handleDateOptionSelection = (selectDates) => {
    this.setState({selectDates: selectDates});
    console.log('Date option selection: ', selectDates.value);
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
    let selectDates = this.state.selectDates;
    let selectedDates = this.state.selectedDates;
    let from = this.state.from;
    let to = this.state.to;
    
    let info = {
        names,
        services,
        location,
        time,
        numSessions,
        timeOfDay,
        daysOfWeek,
        selectDates,
        selectedDates,
        from,
        to,
    }

    console.log(info);
    
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
      reccurence,
      daysOfWeek,
      selectDates,
      selectedDates,
      from,
      to,
    } = this.state;
    
    console.log(this.state.searchId);
    
    let renderRedirect;
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
                    options={this.state.programs}
                  />
                  <div className="headingRow"> Number of Sessions </div>
                  <Select className="dropdown"
                    value={sessions}
                    onChange={this.handleChange5}
                    options={options5}
                  />
                  <div>
                  <div className="headingRow"> Select Method to select dates </div>
                  <Select className="dropdown"
                    value={selectDates}
                    onChange={this.handleDateOptionSelection}
                    options={selectDatesOptions}
                  />
                  </div>
                  {this.handleDateOptionDisplay(selectDates.value)}
                </div>
                <div className="column">
                  <div className="headingColumn"> Min. Time Required </div>
                  <Select className="dropdown"
                    value={time}
                    onChange={this.handleChange4}
                    options={options4}
                  />
                  <div className="headingColumn"> Location </div>
                  <Select className="dropdown"
                    value={location}
                    onChange={this.handleChange3}
                    options={this.state.locations}
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
                  {/*}
                  <form ref="form" onSubmit={this.handleSubmit}>
                    <button className="button">Search</button>
                  </form>
                  */}
                </div>
      </div>
    );
  }
};
