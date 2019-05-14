import React, { Component } from 'react';
import './Navbar.css'
import Dropdown from './Dropdown'

class Navbar extends Component {

  render() {
    return (
      <div>
        <ul className="nav">
           {/* <li><a href="#menu">Inicio</a></li>*/}
           <Dropdown></Dropdown>
        </ul>
      </div>
    );
  }

}


export default Navbar;
