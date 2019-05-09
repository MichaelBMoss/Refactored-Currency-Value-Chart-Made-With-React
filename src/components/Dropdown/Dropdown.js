import React, { Component } from 'react';
import './Dropdown.css';

/*
Props:
	dropdownOptions={[]}
	dropdownMethod={}
	dropdownClassName={}
	dropdownDefaultOption={}
*/

class Dropdown extends Component {

  render() {
		const options = this.props.dropdownOptions.map((ddOption) =>
  		<option value={ddOption}>{ddOption}</option>
		);
    return (
			<select onChange={this.props.dropdownMethod} className={this.props.dropdownClassName}>
				<option value={this.props.dropdownDefaultOption}>{this.props.dropdownDefaultOption}</option>	
				{options}
			</select>
		);
  }
}
export default Dropdown;

