import React, { Component } from 'react';
import './BarGraph.css';

//Import child components
import Bars from './Bars/Bars.js';


/*
Props:
  BarGraphSelections={}
*/

class BarGraph extends Component {

  render() {
    let tempSelections = this.props.BarGraphSelections;
    let rates = this.props.BarGraphRates;
		let valuesArray = [];
		let rawValue;
		let shortRelativeValue;
		let shortValue;
    for (let selection of tempSelections) {
	 		if (selection !== 'Currency') {
	    rawValue = rates[selection];
		  valuesArray.push(rawValue);
	  	}
   	}
		let highest = Math.max(...valuesArray);
		let relativeHeight;
		let tempRelativeValues = {};
		let tempValues = {};
  	for (let selection of tempSelections) {
		  if (selection !== 'Currency') {
		      rawValue = rates[selection];
					relativeHeight = rawValue / highest;
		     	shortRelativeValue = relativeHeight.toFixed(2);
					tempRelativeValues[selection] = shortRelativeValue;
					shortValue = rawValue.toFixed(2);
					tempValues[selection] = shortValue;
			}
		}

    return (
      <div className="BodyBox-graph">
          <div className="BodyBox-graph-upper">
          </div>
          <div className="ContainerOfGraphLower">		
					  <div className="BodyBox-graph-lower">
  		        <Bars />
  		          BarsSelections={tempSelections}
  		          BarsRelativeValues={tempRelativeValues}
  		          BarsTempValues={tempValues}
					  </div>						
          </div> 
      </div> 
		);
  }
}
export default BarGraph;

