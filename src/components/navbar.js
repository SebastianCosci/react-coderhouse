import CartWidget from './cartwidget.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ItemListContainer from './itemlistcontainer.js';
import { Route } from 'react-router-dom';
import Inicio from './inicio.js';
import Contacto from './contacto.js';



function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light barranavegacion">
      <div className="container">
        <a className="navbar-brand" href="#">Makeupholicok</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <div className="nav-item">
              <Link className="nav-Link" to="/home" >Inicio</Link>
            </div>
            <div className="nav-item">
              <Link to="/productos" className="nav-Link">Productos</Link>
            </div>
            <div className="nav-item">
              <Link to="/contacto" className="nav-Link" href="#">Contacto</Link>
            </div>
            <div className="nav-item cart-widget">
              <CartWidget/>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

