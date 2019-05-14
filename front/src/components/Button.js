import React, { Component } from 'react';
import './Button.css'

class Button extends Component {

  del = () => {
    if(this.props.txt === "Cliente"){
      document.getElementById("myInput").value = '';
      document.getElementById("mySpan").innerHTML = '';
    }
    if(this.props.txt === "Articulo"){
      document.getElementById("myInput2").value = '';
    }
    if(this.props.txt === "+"){
      let obj = localStorage.getObj("Venta");
      
      obj.push([localStorage.descripcion, localStorage.modelo, localStorage.cantidad, localStorage.precio]);
      
      localStorage.setObj("Venta", obj);
      alert(localStorage.getObj("Venta"));
    }
    
  }

  render() {
    return (
        <a className={this.props.sty} href={this.props.link} onClick={this.del}>
          {this.props.img ? <img src={this.props.img} alt={this.props.img} /> : null}
          {this.props.txt}
        </a>
      );
  }
}

export default Button;