import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Ventas from './views/Ventas'
import Clientes from './views/Clientes'
import Articulos from './views/Articulos'
import Registro from './views/RegistroVentas'
import Configuracion from './views/Configuracion'
// import logo from './logo.svg';
// import './App.css';


function App() {
  Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
  }
  Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
  }
  localStorage.Articulos = ['a','b','c','d'];
  localStorage.setObj("Venta", null);
  
  localStorage.descripcion = 'des';
  localStorage.modelo = 'model';
  localStorage.cantidad = 'cant';
  localStorage.precio = 'price';
  localStorage.clave = '001';
  localStorage.nombre = 'alex';
  localStorage.rfc = 'rfc';
  localStorage.tasa = '';
  localStorage.enganche = '';
  localStorage.plazo = '';


  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router>
        <Switch>
           <Route exact={true} path="/ventas" component={Ventas}  />
           {/* Pass props to a component rendered by React Router */}
           <Route
             path='/nueva_venta'
             component={() => <Registro folio={0} />}
           />
           <Route exact={true} path="/clientes" component={Clientes}  />
           <Route exact={true} path="/articulos" component={Articulos}  />
           <Route exact={true} path="/configuracion" component={Configuracion}  />
         </Switch>
       </Router>
    </div>
  );
}

export default App;
