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
      tasa: 0,
      enganche: 0,
      plazo: 0
    };
  }
  handleChange = event => {
    if (event.target.name === "tasa")
      this.setState({ tasa: event.target.value });
    if (event.target.name === "enganche")
      this.setState({ enganche: event.target.value });
    if (event.target.name === "plazo")
      this.setState({ plazo: event.target.value });
  };

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
       this.setState({tasa: datos.tasa})
       this.setState({enganche: datos.enganche})
       this.setState({plazo: datos.plazo})
       this.setState({configuracion: configuracion})
    })
  }

  render() {
    return (
      <div className="sellsContainer">
        {this.state.configuracion}
        <div className="form">
          <p className="title">Configuración General</p>
          <br />
          <div className="formContainer">
            <p className="label">Tasa Financiamiento:</p>
            <Textin
              type="text" 
              name="tasa"
              value={this.state.tasa}
              changes={this.handleChange}
            />
            <br />
             <p className="label">% Enganche:</p>
            <Textin
              type="text" 
              name="enganche"
              value={this.state.enganche}
              changes={this.handleChange}
            />
            <br />
            <p className="label">Plazo Máximo:</p>
            <Textin
              type="text" 
              name="plazo"
              value={this.state.plazo}
              changes={this.handleChange}
            />
            <br />
          </div>
        </div>
        <Button 
          sty="btn igreen" 
          txt="Cancelar"
          link="/"
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





