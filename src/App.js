import './App.css';
import { useEffect, useState } from 'react';
import { getColores } from './Servicios/coloresServicios';
import axios from "axios";
import Login from './components/Login/Login';
import "./components/Login/LoginStyles.css";
import Semaforo from './components/Semaforo/Semaforo';
import "./components/Semaforo/SemaforoStyles.css";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/semaforo' element={<Semaforo/>} />
      </Routes>
      
      
    </Router>
  );
}

export default App;
