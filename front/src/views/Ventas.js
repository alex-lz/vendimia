import React, { Component } from 'react';
import Button from '../components/Button'
import Table from '../components/Table'
import '../components/styles.css';
import add_icon from '../add-icon.png'

class Ventas extends Component {
  render() {
    return (
      <div>
         <Button 
            sty="btn iblue right" 
            img={add_icon}
            txt="Nueva Venta"
            link="nueva_venta"
          />
          <br />
          <Table
            title="Ventas Activas"
            fields={['First Name', 'Last Name', 'Job Title']}
            dates={[ ['James','Matman','Chief Sandwich Eater'], 
            ['The','Tick','Crimefighter Sorta'],
            ['Alexander','Starz','Developer'] 
            ]} 
          />
      </div>
    );
  }
}

export default Ventas;