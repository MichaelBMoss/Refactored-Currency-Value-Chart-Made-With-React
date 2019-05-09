import React, { Component } from 'react';
import './Bars.css';

/*
Props:
  barValue={}
  barName={}
*/

//		let bars = this.state.selections.map((selection) => {
//			return selection !== 'Currency' ?					
//				<div className="BodyBox-graph-lower-bar" style={{height: this.state.relativeValues[selection] * 100 + '%'}}>
//					<p> 
//						{selection}
//					</p>  
//					<p className="BodyBox-graph-lower-bar-invisibleText">
//						1 USD is worth {this.state.values[selection]} {selection}					
//					</p>
//				</div>
//			: null
//		})

class Bars extends Component {
  render() {
    return (
      <div>
      this.props.BarsSelections.map((selection) => {
        <p> hello </p>
      })
      </div>
    )
  }
}

export default Bars;

