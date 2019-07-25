import React, {Component} from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Search.css';
import LOCATIONS from '../../constants/locations';
import PROGRAMS from '../../constants/programs'
import { setHours, setMinutes } from 'date-fns';
import { Redirect } from 'react-router-dom';

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

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clinicians: [],
      services: [],
      location: null,
      minTime: 30,
      startDate: new Date(),
      endDate: null,
      startTime: setHours(setMinutes(new Date(), 0), 8),
      endTime: null,
      redirect: false,
      searchId: null,
    };
  }
  componentDidMount = () => {

      //load in clinicians
      this.props.getCliniciansAPI().then((res) => {
          let clinicians = [];
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
          this.setState({ allClinicians: clinicians });
      });

      let searchId = this.props.hidden.match.params.searchId;

      //Use the id to get the search params
      if (searchId) {
          this.props.getSearchAPI(searchId).then((res) => {
              this.setState(state => ({
                  clinicians: res.names,
                  services: res.services,
                  location: res.location,
                  minTime: res.minTime,
                  startDate: new Date(res.startDate),
                  endDate: res.endDate ? new Date(res.endDate) : null,
                  startTime: res.startTime ? new Date(res.startTime) : new Date(state.startTime),
                  endTime: res.endTime ? new Date(res.endTime) : null,
                  //TODO: add recurrence
                  //do we add something here for daysOfWeek?
              }))
          });
      }
  }
  
  updateClinicians = (name) => {
    if (name.length === 0) {
      this.setState({ clinicians: [] });
    } else {
      this.setState({ clinicians: name });
    }
  }

  updateServices = (services) => {
    this.setState({ services });
  }

  changeLocation = (location) => {
    this.setState({ location });
  }

  increaseMinTime = () => {
    if (this.state.minTime < 270) {
      this.setState(state => ({ minTime: state.minTime + 15 }));
    }
  }

  decreaseMinTime = () => {
    if (this.state.minTime > 0) {
      this.setState(state => ({ minTime: state.minTime - 15 }));
    }
  }

  changeStartDate = (date) => {
    this.setState({
      startDate: date,
    });
  }

  changeEndDate = (date) => {
    this.setState({
      endDate: date,
    });
  }

  changeStartTime = (time) => {
    this.setState({
      startTime: time,
    });
  }

  changeEndTime = (time) => {
    this.setState({
      endTime: time,
    });
  }

  handleSubmit = () => {
    let names = this.state.clinicians;
    let services = this.state.services;
    let location = this.state.location;

    let info = {
        names,
        services,
        location,
        minTime: this.state.minTime,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        startTime: this.state.startTime,
        endTime: this.state.endTime,
    }
    
    this.setState({ info: info, redirect: true });
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
    const { 
      clinicians,
      services,
      location,
    } = this.state;
    
    if (this.state.redirect && this.state.searchId){
      let path = "/view-search/"+this.state.searchId;
      return <Redirect to={path}/>
    }

    return (
      <div className="Search">
        <div className="Search__title-wrapper">
          <h1 className="Search__title">Find Available Times</h1>
          <img src="/icons/find.svg" alt="Find"/>
        </div>
        <div className="Section">
          <div className="Section__header">Service Details</div>
          <div className="Section__form">
            <div className="Section__form-field">
              <label htmlFor="clinician" className="Section__form-label">Clinician Name</label>
              <Select
                name="clinician"
                id="clinician"
                isMulti
                placeholder="Any clinician"
                styles={{ placeholder: () => ({ color: 'black' }) }}
                value={clinicians}
                onChange={this.updateClinicians}
                options={this.state.allClinicians}
              />
            </div>
            <div className="Section__form-field">
              <label htmlFor="service-type" className="Section__form-label">Service or program</label>
              <Select
                name="service-type"
                id="service-type"
                isMulti
                placeholder="Any program or service"
                styles={{ placeholder: () => ({ color: 'black' }) }}
                value={services}
                onChange={this.updateServices}
                options={PROGRAM_OPTIONS}
              />
            </div>
            <div className="Section__form-field">
              <label htmlFor="location" className="Section__form-label">Location</label>
              <Select
                name="location"
                id="location"
                placeholder="Any location"
                styles={{ placeholder: () => ({ color: 'black' }) }}
                value={location}
                onChange={this.changeLocation}
                options={LOCATION_OPTIONS}
              />
            </div>
            <div className="Section__form-field">
              <label htmlFor="location" className="Section__form-label">Minimum time</label>
              <div className="Section__form-rocker">
                <img
                  className="Section__form-rocker-input"
                  onClick={this.decreaseMinTime}
                  src="/icons/minus.svg"
                  alt="Minus"/>
                <div className="Section__form-rocker-value">
                  { this.state.minTime } mins
                </div>
                <img
                  className="Section__form-rocker-input"
                  onClick={this.increaseMinTime}
                  src="/icons/plus.svg"
                  alt="Plus"/>
              </div>
            </div>
          </div>
        </div>
        <div className="Section">
          <div className="Section__header">Date and Time Range</div>
          <div className="Section__form">
            <div className="Section__split-form-field">
              <div className="Section__form-field">
                <label htmlFor="start-date" className="Section__form-label">Start date</label>
                <DatePicker
                  name="start-date"
                  id="start-date"
                  className="DatePicker"
                  selected={this.state.startDate}
                  onChange={this.changeStartDate}
                  maxDate={this.state.endDate}
                />
              </div>
              <div className="Section__split-form-field-divider" />
              <div className="Section__form-field">
                <label htmlFor="end-date" className="Section__form-label">End date</label>
                <DatePicker
                  name="end-date"
                  id="end-date"
                  className="DatePicker"
                  selected={this.state.endDate}
                  onChange={this.changeEndDate}
                  minDate={this.state.startDate}
                />
              </div>
            </div>
            <div className="Section__split-form-field">
              <div className="Section__form-field">
                <label htmlFor="start-time" className="Section__form-label">Start time</label>
                <DatePicker
                  name="start-time"
                  id="start-time"
                  className="DatePicker"
                  selected={this.state.startTime}
                  onChange={this.changeStartTime}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  dateFormat="h:mm aa"
                  timeCaption="Time"
                  minTime={setHours(setMinutes(new Date(), 0), 8)}
                  maxTime={this.state.endTime ?
                      this.state.endTime - (15 * 60000)
                    : setHours(setMinutes(new Date(), 45), 19)
                  }
                />
              </div>
              <div className="Section__split-form-field-divider" />
              <div className="Section__form-field">
                <label htmlFor="end-time" className="Section__form-label">End time</label>
                <DatePicker
                  name="end-time"
                  id="end-time"
                  className="DatePicker"
                  selected={this.state.endTime}
                  onChange={this.changeEndTime}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  dateFormat="h:mm aa"
                  timeCaption="Time"
                  minTime={new Date(this.state.startTime.getTime() + (15 * 60000))}
                  maxTime={setHours(setMinutes(new Date(), 0), 20)}
                />
              </div>
            </div>
          </div>
        </div>
        <button 
            className="Search__submit" 
            onClick={this.handleSubmit}>
            Search
        </button>
      </div>
    );
  }
};
