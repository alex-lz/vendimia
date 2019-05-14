import React, { Component } from 'react';
import './Header.css'
import tag from '../price-tag.png';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <spam className="txt">La Vendimia</spam>
          <img src={ tag } alt="price tag"></img>
        </header>
      </div>
    );
  }
}

export default Header; 