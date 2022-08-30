import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div id="navbar">
      <Link to="/home">Home</Link>
      <Link to="/semaforo">Semaforo</Link>
      <Link to="/colores">Colores</Link>
      <Link to="/modelos">Modelos</Link>
      <Link to="/">Salir</Link>
    </div>
  );
}

export default Navbar;
