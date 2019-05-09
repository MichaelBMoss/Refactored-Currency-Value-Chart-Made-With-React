import React, { Component } from 'react';
import './App.css';

//Import Componenets
import Dropdown from './components/Dropdown/Dropdown.js';
import BarGraph from './components/BarGraph/BarGraph.js';

// Define our App
class App extends Component {
  state = {
  	apiData: [],
    currencies: [],
		selections: [],
		relativeValues: {},
		values: {},
		barNumber: [1,2,3,4,5,]
	}

	componentDidMount() {
		fetch("https://api.exchangeratesapi.io/latest?base=USD")
			.then(response => response.json())
			.then(data => {
				console.log("got data", data);
				const rates = data.rates;
				const currencies = Object.keys(rates);
				this.setState({
					apiData: data,
					currencies: currencies,
				});
			});
		console.log('fetch');
	}

	handleClear = () => {
    console.log('clear');
  }
	
	heightTo100 = () => {
		let fadeInBars;
		fadeInBars = document.querySelector('.BodyBox-graph-lower');
    fadeInBars.style.height = 100 + '%';
	}

	heightToZero = () => {
		let zeroBars;		
		zeroBars = document.querySelector('.BodyBox-graph-lower');
    zeroBars.style.height = 0 + '%';
	}
		
	handleChange = () => {
		this.heightToZero();
		setTimeout(() => this.setSelections(), 400);
	}
	
	setSelections = () => {
	  let tempSelections = [];
	  for (let num of this.state.barNumber) {
		  tempSelections.push(document.querySelector('.dropdown' + num).value);
	  }
    this.setState({
			selections: tempSelections,
		});
	}

	wait = () => {
		console.log('wait');
		setTimeout(() => this.heightTo100(), 20);
	}

  render() {
    console.log(this.state);
    return (
      <div className="App">
    		<div className="Body-div">
		      <div className="Header">
		          <div className="Header-content">
		              Amounts Of Foreign Currencies Equal To One United States Dollar
		          </div>
		      </div>
		      <div className="SidebarAndBodyBox">
		          <div className="SidebarBox">
										<form className="InputBox">
										  <input onClick={this.handleClear} type="reset" value="Clear Selections" /> 
										  {this.state.barNumber.map((num) =>
											  <Dropdown 
												  dropdownOptions={this.state.currencies}
	                        dropdownMethod={this.handleChange}
                          dropdownDefaultOption={"Currency"}
                          dropdownClassName={"dropdown" + num}
										    />)}
										</form>                  
		          </div>
		          <div className="BodyBox">
		            <BarGraph
		              BarGraphSelections={this.state.selections}
		              BarGraphRates={this.state.apiData.rates}
		            />
		          </div>       
		      </div> 
				</div>   
			</div>
    );
  }
}

export default App;
