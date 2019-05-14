import React, { Component } from 'react';
import './Dropdown.css'
import PropTypes from 'prop-types';

class Dropdown extends Component {

  componentDidMount() {
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }

  openDropdown = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  render() {
    return (
      <div className="dropdown">
        <button onClick={this.openDropdown} className="dropbtn">Dropdown</button>
        <div id="myDropdown" className="dropdown-content">
          <a href="/ventas">Ventas</a>
          <hr />
          <a href="/clientes">Clientes</a>
          <a href="/articulos">Articulos</a>
          <a href="/configuracion">Configuración</a>
        </div>
      </div>
    );
  }

}

Dropdown.propTypes = {
  identify: PropTypes.string
  /*vents: PropTypes.string.isRequited,
  clits: PropTypes.string.isRequited,
  artls: PropTypes.string.isRequited,
  confi: PropTypes.string.isRequited*/
};

Dropdown.defaultProps = {
  identify: "id01"
  /*vents: "Ventas",
  clits: "Clientes",
  artls: "Articulos",
  confi: "Configuracion"*/
};


export default Dropdown;
