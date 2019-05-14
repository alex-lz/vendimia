import React, { Component } from 'react';
import Button from '../components/Button'
import Table from '../components/Table'
import '../components/styles.css';
import add_icon from '../add-icon.png'
import config from '../config'

let listClients = [];

class Clientes extends Component {
    componentDidMount() {
        fetch(config.apiUrl + '/clientes_get')
        .then(results => { 
          return results.json() 
        })
        .then(data => { 
          console.log(data.clientes)
           let configuracion = data.clientes.map((cliente) => {
               listClients.push([ cliente.nombre, cliente.apellido_p, cliente.apellido_m, cliente.rfc ] );
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
            txt="Nuevo Cliente"
            link="nueva_venta"
          />
          <br />
          <Table
            title="Clientes registrados"
            fields={['Nombre', 'Ape Paterno', 'Ape Materno', 'RFC']}
            dates={listClients} 
          />
      </div>
    );
  }
}

export default Clientes;