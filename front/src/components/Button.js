import React, { Component } from 'react';
import './Button.css'

class Button extends Component {

  del = () => {
    document.getElementById("myInput").remove();
    document.getElementById("mySpan").remove();
  }

  render() {
    return (
        <a className={this.props.sty} href={this.props.link} onclick={this.del}>
          {this.props.img ? <img src={this.props.img} alt={this.props.img} /> : null}
          {this.props.txt}
        </a>
      );
  }
}

export default Button;