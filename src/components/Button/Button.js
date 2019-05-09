import React, { Component } from 'react';
import './Button.css';

/*
Props:
buttonMethod={}
buttonText={}
buttonClass={}
*/

class Button extends Component {
  render() {
    return (
      <button className={this.props.buttonClass} onClick={this.props.buttonMethod} type="button">{this.props.buttonText}</button>
		);
  }
}
export default Button;

