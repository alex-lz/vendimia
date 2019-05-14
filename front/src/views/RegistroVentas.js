import React, { Component } from 'react';
import Button from '../components/Button'
import TableArt from '../components/TableArt'
import Textin from '../components/Textin'
import Autocomplete from '../components/Autocomplete'
import AutocompleteArt from '../components/AutocompleteArt'
import '../views/RegistroVentas.css';
import config from '../config'

let dataArts = [];
let listArts = [];
let listMod = [];
let listCan = [];
let listPre = [];
let listClients = [];
let listKeys = [];
let listRfcs = [];

class Ventas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      venta: [],folio:0
    };
  }

  componentDidMount() {
    fetch(config.apiUrl + '/ventas_folio')
    .then(results => { 
      return results.json() 
    })
    .then(data => { 
      let configuracion = data.folios.map((fol) => {
      let folio = fol.folio;
       this.setState({folio: folio})
    })
    this.setState({configuracion: configuracion})
       
    })

    fetch(config.apiUrl + '/config_get')
    .then(results => { 
      return results.json() 
    })
    .then(data => { 
      console.log(data.config)
       let configuracion = data.config.map((dato) => {
           localStorage.tasa = dato.tasa_financiamiento;
           localStorage.enganche = dato.enganche;
           localStorage.plazo = dato.plazo_maximo;
       })
       this.setState({configuracion: configuracion})
    })
   // venta = localStorage.getObj("Venta");
    fetch(config.apiUrl + '/clientes_get')
    .then(results => { 
      return results.json() 
    })
    .then(data => { 
      console.log(data.clientes)
       let configuracion = data.clientes.map((cliente) => {
           // datos.push([ cliente.clave, cliente.nombre, cliente.apellido_p, cliente.apellido_m, cliente.rfc ] );
           listClients.push( cliente.nombre + ' ' + cliente.apellido_p + ' ' + cliente.apellido_m );
           listKeys.push( cliente.clave );
           listRfcs.push( cliente.rfc );
       })
       this.setState({configuracion: configuracion})
    })

    fetch(config.apiUrl + '/articulos_get')
    .then(results => { 
      return results.json() 
    })
    .then(data => { 
      console.log(data.articulos)
       let configuracion = data.articulos.map((art) => {
           dataArts.push([ art.descripcion, art.modelo, art.cantidad, art.precio ]);
           listArts.push( art.descripcion );
           listMod.push( art.modelo );
           listCan.push( art.cantidad );
           listPre.push( art.precio );
       })
       this.setState({configuracion: configuracion})
    })
  }

  add = () => {
    // dataArts.push('Hola');
    alert("Hello! I am an alert box!!");
  }

  add = () => {
    let obj = localStorage.getObj("Venta");
    let precioArt = parseFloat(localStorage.precio);
    let cantidad = parseFloat(localStorage.cantidad);
    let tasa = parseFloat(localStorage.tasa);
    let plazo = parseFloat(localStorage.plazo);

    let precio = precioArt * (1 + ((tasa*plazo)/100) )
    let importe = precio * cantidad;

    if(obj){
        obj.push([localStorage.descripcion, localStorage.modelo, localStorage.cantidad, precio, importe]);
        localStorage.setObj("Venta", obj);
        this.setState({ venta: obj });
    } else{
        obj = [[localStorage.descripcion, localStorage.modelo, localStorage.cantidad, precio, importe]];
        localStorage.setObj("Venta", obj);
        this.setState({ venta: obj });
    }
  };

  render() {
    return (
      <div className="form">
          <p className="title">Registro Ventas</p>
          <p className="folio">{'Folio Venta: ' + this.state.folio}</p>
          <div className="formContainer">
          <Button 
            sty="btn iblue" 
            txt="Cliente"
            func="del"
          />
          <Autocomplete
            dates={listClients}
            claves={listKeys}
            rfc={listRfcs}
            ph="Buscar cliente..."
          />
          <hr />
          <Button 
            sty="btn iblue" 
            txt="Articulo"
          />
          <AutocompleteArt
            dates={dataArts}
            arts={listArts}
            modelo={listMod}
            cantidad={listCan}
            precio={listPre}
            ph="Buscar articulo..."
          />
          <a className="btn square igreen" onClick={this.add}>+</a>
          </div>
          <br />
          <TableArt
            fields={['Descrpción Articulo', 'Modelo', 'Cantidad', 'Precio', 'Importe']}
            dates={this.state.venta} 
          />
      </div>
    );
  }
}

export default Ventas;