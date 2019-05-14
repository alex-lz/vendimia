import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Ventas from './views/Ventas'
import Registro from './views/RegistroVentas'
import Configuracion from './views/Configuracion'
// import logo from './logo.svg';
// import './App.css';


function App() {
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
           <Route exact={true} path="/configuracion" component={Configuracion}  />
         </Switch>
       </Router>
    </div>
  );
}

export default App;
