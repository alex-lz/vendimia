import React, { Component } from 'react';
import Button from '../components/Button'
import Textin from '../components/Textin'
import '../views/RegistroVentas.css';
import config from '../config'
let datos = {};
class Configuracion extends Component {

  constructor() {
    super();
    this.state = { 
      configuracion: [], 
    };
  }

  componentDidMount() {
    fetch(config.apiUrl + '/config_get')
    .then(results => { 
      return results.json() 
    })
    .then(data => { 
      console.log(data.config)
       let configuracion = data.config.map((dato) => {
           datos = { 
             tasa: dato.tasa_financiamiento, 
             enganche: dato.enganche, 
             plazo: dato.plazo_maximo
           }
       })
       this.setState({configuracion: configuracion})
    })
  }

  render() {
    return (
      <div>
        {this.state.configuracion}
        <div className="form">
          <p className="title">Configuración General</p>
          <br />
          <div className="formContainer">
            <p className="label">Tasa Financiamiento:</p>
            <Textin
              type="text" 
               name="cliente"
               value={datos.tasa}
            />
            <br />
             <p className="label">% Enganche:</p>
            <Textin
              type="text" 
              name="cliente"
              value={datos.enganche}
            />
            <br />
            <p className="label">Plazo Máximo:</p>
            <Textin
              type="text" 
              name="cliente"
              value={datos.plazo}
            />
            <br />
          </div>
        </div>
        <Button 
          sty="btn igreen" 
          txt="Cancelar"
        />
        <Button 
          sty="btn igreen" 
          txt="Guardar"
        />
      </div>
    );
  }
}

export default Configuracion;





