import React, {Component} from 'react';
import ChartView from './ChartView/ChartView';
import CalendarView from './CalendarView/CalendarView';
import { Redirect } from 'react-router';
import { Checkbox } from '@material-ui/core';
import moment from 'moment';
import axios from 'axios';
import './View.css';

const DAY_START = '8:00';
const DAY_END = '20:00';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// compare function to sort time slots
const compareFunction = (a, b) => {
    
    if (moment(a.Date).hour(a.Start.split(":")[0]).minute(a.Start.split(":")[1]) < 
        moment(b.Date).hour(b.Start.split(":")[0]).minute(b.Start.split(":")[1])) 
    return -1;
    
    if (moment(a.Date).hour(a.Start.split(":")[0]).minute(a.Start.split(":")[1]) > 
        moment(b.Date).hour(b.Start.split(":")[0]).minute(b.Start.split(":")[1])) 
    return 1;
    
    if (a.Start < b.Start) return 1;
    if (b.Start < a.Start) return -1;
    
    return 0;
}

//compare function for time "h:mm"
const compareTime = (a, b) => {
    let hourA = parseInt(a.split(":")[0])
    let hourB = parseInt(b.split(":")[0]);
    let minA = parseInt(a.split(":")[1])
    let minB = parseInt(b.split(":")[1])
    if (hourA < hourB){
        return 1;
    }
    if (hourA > hourB) {
        return -1;
    } 
    else if (hourA == hourB) {
        if (minA < minB){
            return 1;
        }
        if (minA > minB){
            return -1;
        }
    }
    return 0;
}

// create an array of available times grouped by weeks
const processData = (data) => {
    const sortedData = data
        .flatMap(x => x)
        .sort(compareFunction);
    return getAvailableTimes(sortedData);
}

// find overlapping times from two arrays of time slots
const getOverlappingTimes = (t1, t2) => {
    const overlappingTimes = [];
    for (let i = 0, j = 0, loops = 0; i < t1.length - 1 && j < t2.length - 1 && loops <= 100; ) {
        if (loops === 100) {
            console.log("We looping");
            break;
        }
        if (moment(t1[i].Date) < moment(t2[j].Date)) i++
        else if (moment(t2[j].Date) < moment(t1[i].Date)) j++;

        else if (moment(t1[i].Start, 'h:mm') >= moment(t2[j].End, 'h:mm')) j++;
        else if (moment(t1[i].End, 'h:mm') <= moment(t2[j].Start, 'h:mm')) i++;

        else if (moment(t1[i].End, 'h:mm') > moment(t2[j].Start, 'h:mm') && moment(t2[j].End, 'h:mm') > moment(t1[i].Start, 'h:mm')){
            overlappingTimes.push({
                Start: moment(t1[i].Start, 'h:mm') > moment(t2[j].Start, 'h:mm') ? t1[i].Start : t2[j].Start,
                End: moment(t1[i].End, 'h:mm') < moment(t2[j].End, 'h:mm') ? t1[i].End : t2[j].End,
                Names: t1[i].Names.concat(t2[j].Names),
                Date: t1[i].Date,
                Location: t1[i].Location,
            })
            if (moment(t1[i].End, 'h:mm') < moment(t2[j].End, 'h:mm')) i++;
            else j++;
        } else {
            loops++;
        }
    }
    return overlappingTimes;
}

const groupData = (data, searchParams) => {
    const groupedData = {}
    data
        .filter(elem =>
            moment().startOf('date').diff(elem.Date, 'days') <= 0 &&
            moment(elem.End, 'h:mm').diff(moment(elem.Start, 'h:mm'), 'minutes') > searchParams.time.value)
        .sort(compareFunction)
        .forEach(elem => {
            let key = (moment().diff(elem.Date, 'weeks')) * -1;
            if (groupedData[key]) {
                groupedData[key].push(elem);
            } else {
                groupedData[key] = [];
                groupedData[key].push(elem);
            }
        });
    return groupedData;
}

// find available times from booked times returned from mongo
const getAvailableTimes = (sortedData) => {
    const availableTimes = [];
    sortedData.forEach((elem, index) => {
        if (index === sortedData.length - 1) return;
        // add full day time slots between today and first booked slot (excluding weekends)
        if (index === 0) {
            // commented out for now since all the dates in the current data are before today 

            // let currentDay = moment();
            // while (moment(elem.Date).diff(currentDay, 'days')) {
            //     if (currentDay.day() != 0 && currentDay.day() != 6) {
            //         availableTimes.push({
            //             Date: currentDay.format('D-MMM-YY'),
            //             Start: DAY_START,
            //             End: DAY_END,
            //             Location: elem.Location,
            //         });
            //     }
            //     currentDay.add(1, 'days');
            // }
        }
        // add time slots between DAY_START and first booked slot of the day
        if ((index === 0 || sortedData[index - 1].Date !== elem.Date) && elem.Start !== DAY_START) {
            availableTimes.push({
                id: elem.ID,
                Names: [`${elem.FirstName} ${elem.LastName}`],
                Date: elem.Date,
                Start: DAY_START,
                End: elem.Start,
                Location: elem.Location,
            });
        }
        // add time slots in the middle of the day
        if (elem.Date === sortedData[index + 1].Date) {
            availableTimes.push({
                id: elem.ID,
                Names: [`${elem.FirstName} ${elem.LastName}`],
                Date: elem.Date,
                Start: elem.End,
                End: sortedData[index + 1].Start,
                Location: elem.Location,
            });
        }
        // add time slots between the last booked slot of the day and DAY_END 
        if (sortedData[index + 1].Date !== elem.Date && elem.end !== DAY_END) {
            availableTimes.push({
                id: elem.ID,
                Names: [`${elem.FirstName} ${elem.LastName}`],
                Date: elem.Date,
                Start: elem.End,
                End: DAY_END,
                Location: elem.Location,
            })
        }
        // add full day time slots between today and next booked slot (excluding weekends)
        let currentDay = moment(elem.Date).add(1, 'days');
        while (moment(sortedData[index + 1].Date).diff(currentDay, 'days') > 0) {
            if (currentDay.day() != 0 && currentDay.day() != 6) {
                availableTimes.push({
                    id: elem.ID,
                    Names: [`${elem.FirstName} ${elem.LastName}`],
                    Date: currentDay.format('D-MMM-YY'),
                    Start: DAY_START,
                    End: DAY_END,
                    Location: elem.Location,
                });
            }
            currentDay.add(1, 'days');
        }
    });
    return availableTimes;
}

export default class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'chart',
            data: [],
            ready: false,
            index: 0,
            searchParams: {},
            redirect: false,
            availableTimes: {},
            cliniciansFilter: {},
        };
        this.clinicians = {};
        this.data = {};
        
        //grab the id from the url
        let searchId = this.props.hidden.match.params.searchId;
        //Use the id to get the search params
        this.props.getSearchAPI(searchId).then((res) => {
            this.setState({ searchParams: res[0] });
            
            //For every name in the search ->
            //  - Add the clinician name to the list of clinicians (dict)
            //  - Add the dates together
            Promise.all(res[0].names.map((name, index) => {
                
                this.clinicians[name[0].label] = {
                    name: [name[0].label],
                    color: colors[index],
                }

                this.state.availableTimes[name[0].label] = [];
                this.state.cliniciansFilter[name[0].label] = true;
                
                var result = this.props.getScheduleAPI(name[0].First, name[0].Last)
                    .then((res) => {
                        const availableTimes = processData(res);
                        this.state.data.push(availableTimes);
                        this.state.availableTimes[name[0].label].push(availableTimes);
                    });
                return result;
            })).then(() => this.setState({ ready: true }));
        })
    }

    toggleView = (e) => {
        if (this.state.view == "chart") {
            this.setState({view: "calendar"});
        }
        else {
            this.setState({view: "chart"});
        }
    }
    
    goBack = () => {
        this.setState({redirect: true});
    }

    toggleClinicianFilter = (name) => {
        this.setState(state => ({ cliniciansFilter: {
            ...state.cliniciansFilter,
            [name]: !state.cliniciansFilter[name],
        } }));
    }

    render() {
        console.log(this.state.searchId);
        let renderRedirect;
        if (this.state.redirect){
            let path = "/edit-time/"+this.props.hidden.match.params.searchId;;
            return <Redirect to={path}/>
        }
        
        //We should return a spinner :P
        if (!this.state.ready) {
            
        return (
                <p> Loading </p>
            );
        }


        let overlappingTimes = [];
        for (let clinician in this.state.cliniciansFilter) {
            if (this.state.cliniciansFilter[clinician]) {
                if (overlappingTimes.length === 0) overlappingTimes = this.state.availableTimes[clinician][0];
                else overlappingTimes = getOverlappingTimes(overlappingTimes, this.state.availableTimes[clinician][0]);
            }
        }

        //In the case when overlappingTimes is empty - this hangs (add a check here or in groupdata itself)
        this.data = groupData(overlappingTimes, this.state.searchParams);
        
        const noResultOverlay = (
          <div className="no-result">
            <p>No times found for these clinicians.</p>
            <button onClick={this.goBack}> Go back to Search Page </button>
          </div>
        )

        return (
            <div className="view">
                <div>
                    <div className="header">
                        <div className="toggle-buttons-back">
                            <button
                                className="back-button"
                                onClick={this.goBack}>
                                Back
                            </button>
                        </div>
                        <h2 className="heading">Available Times</h2>
                        <div className="toggle-buttons">
                            <button
                                className="toggle-button"
                                onClick={this.toggleView}
                                data={this.props.data}>
                                {(this.state.view == 'chart') ? "Calendar View" : "Chart View"}
                            </button>
                        </div>
                    </div>
                    <div className="clinicians-list">
                        {Object.values(this.clinicians).map((elem, index) =>
                        <div className="clinician" key={index+"(3 clinicial hours)"}>
                            <Checkbox
                                id={`clinician-checkbox-${index}`}
                                style={{ color: elem.color }}
                                checked={this.state.cliniciansFilter[elem.name]}
                                onChange={() => this.toggleClinicianFilter(elem.name)}
                                value={elem.name} />
                                <label htmlFor={`clinician-checkbox-${index}`}>
                                <span className="clinician-name">{ elem.name } </span>
                            </label>
                        </div>)}
                    </div>
                    <div className="schedule-container">
                    { Object.keys(this.data).length === 0 && noResultOverlay }
                    {
                        this.state.view === 'chart'
                            ? <ChartView data={this.data} postSavedAPI={this.props.postSavedAPI} clinicians={this.clinicians} />
                            : <CalendarView data={this.data} clinicians={this.clinicians}/>
                    }
                    </div>
                </div>
            </div>
        );
    }
}
