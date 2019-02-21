import React, {Component} from 'react';
import Select from 'react-select';

const options = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'}
]

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      // add other input fields
      // time: '',
    };
  }

  handleChange = (selectedOption) => {
    this.setState({selectedOption})
    console.log(`Option selected:`, selectedOption)
    // set state based on input value
  }

  // handleSubmit = (e) => {
  //   // make request to backend/db based on form input (get the input from this.state)
  // }
  
  render() {
    const { selectedOption } = this.state;
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
      // <div className="search">
      //   <h1>Find Available Times</h1>
      //   <form className="searchForm" onSubmit={this.handleSubmit}>
      //     <div className="formColumn1">
      //       {/* components/elements for selecting clinician, service type, location */}

      //     </div>
      //     <div className="formColumn2">
      //       {/* example 'input' element with onChange handler */}
      //       <label>
      //         Time
      //         <input value={this.state.time} onChange={this.handleChange} />
      //       </label>

      //       <input type="submit" value="Search" />
      //     </div>
      //   </form>
        
      // </div>
    );
  }
};