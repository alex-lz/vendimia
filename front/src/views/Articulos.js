import React, { Component } from 'react';
import Button from '../components/Button'
import Table from '../components/Table'
import '../components/styles.css';
import add_icon from '../add-icon.png'
import config from '../config'

let listArts = [];

class Articulos extends Component {
  componentDidMount() {
    fetch(config.apiUrl + '/articulos_get')
    .then(results => { 
      return results.json() 
    })
    .then(data => { 
      console.log(data.articulos)
       let configuracion = data.articulos.map((art) => {
           listArts.push([ art.descripcion, art.modelo, art.cantidad, art.precio ]);
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
            txt="Nuevo Articulo"
            link="nueva_venta"
          />
          <br />
          <Table
            title="Articulos registrados"
            fields={['Descripción', 'Modelo', 'Existencia', 'Precio']}
            dates={listArts} 
          />
      </div>
    );
  }
}

export default Articulos;