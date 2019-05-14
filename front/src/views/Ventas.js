import React, { Component } from 'react';
import Button from '../components/Button'
import Table from '../components/Table'
import '../components/styles.css';
import add_icon from '../add-icon.png'
import config from '../config'

let listSells = [];

class Ventas extends Component {
  componentDidMount() {
    fetch(config.apiUrl + '/ventas_get')
    .then(results => { 
      return results.json() 
    })
    .then(data => { 
      console.log(data.ventas)
       let configuracion = data.ventas.map((sell) => {
           listSells.push([ sell.folio, sell.clave, sell.nombre, sell.total, sell.FECHA ] );
       })
       this.setState({configuracion: configuracion})
    })
}
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
            fields={['Folio Venta', 'Clave Cliente', 'Nombre', 'Total', 'Fecha']}
            dates={listSells} 
          />
      </div>
    );
  }
}

export default Ventas;