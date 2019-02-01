import React, {Component} from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // add other input fields
      time: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    // set state based on input value
  }

  handleSubmit = (e) => {
    // make request to backend/db based on form input (get the input from this.state)
  }
  
  render() {
    return (
      <div className="search">
        <h1>Find Available Times</h1>
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <div className="formColumn1">
            {/* components/elements for selecting clinician, service type, location */}

          </div>
          <div className="formColumn2">
            {/* example 'input' element with onChange handler */}
            <label>
              Time
              <input value={this.state.time} onChange={this.handleChange} />
            </label>

            <input type="submit" value="Search" />
          </div>
        </form>
        
      </div>
    );
  }
};