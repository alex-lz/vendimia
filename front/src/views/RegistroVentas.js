import React, { Component } from 'react';
import Button from '../components/Button'
import TableArt from '../components/TableArt'
import Textin from '../components/Textin'
import Autocomplete from '../components/Autocomplete'
import '../views/RegistroVentas.css';

let datos = [];
let listClient = [];
let listKeys = [];
let listRfc = [];

class Ventas extends Component {

  componentDidMount() {
    fetch('http://localhost:8080/clientes_get')
    .then(results => { 
      return results.json() 
    })
    .then(data => { 
      console.log(data.clientes)
       let configuracion = data.clientes.map((cliente) => {
           datos.push([ cliente.clave, cliente.nombre, cliente.apellido_p, cliente.apellido_m, cliente.rfc ] );
           listClient.push( cliente.nombre + ' ' + cliente.apellido_p + ' ' + cliente.apellido_m );
           listKeys.push( cliente.clave );
           listRfc.push( cliente.rfc );
       })
       this.setState({configuracion: configuracion})
       console.log("State",this.state.configuracion)
    })
  }

  render() {
    return (
      <div className="form">
          <p className="title">Registro Ventas</p>
          <p className="folio">{'Folio Venta: 00' + this.props.folio}</p>
          <div className="formContainer">
          <Button 
            sty="btn iblue" 
            txt="Cliente"
            func="del"
          />
          <Autocomplete
            dates={listClient}
            claves={listKeys}
            rfc={listRfc}
            ph="Buscar cliente..."
          />
          <hr />
          <Button 
            sty="btn iblue" 
            txt="Articulo"
          />
          <Textin
            type="text" 
            txt="Buscar articulo..."
            name="articulo"
          />
          <Button 
            sty="btn square igreen" 
            txt="+"
          />
          </div>
          <br />
          <p>{datos}</p>
          <TableArt
            fields={['Descrpción Articulo', 'Modelo', 'Cantidad', 'Precio', 'Importe']}
            dates={datos} 
          />
      </div>
    );
  }
}

export default Ventas;