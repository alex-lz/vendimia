import React, { Component } from 'react';
import './Textin.css'

class Textin extends Component {

  render() {
    return (
        <input 
          type={this.props.type} 
          placeholder={this.props.txt} 
          name={this.props.name} 
          value={this.props.value}
          onChange={this.props.changes}
        />
      );
  }
}

export default Textin;