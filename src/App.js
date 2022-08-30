import "./App.css";
import Login from "./pages/Login";
import "./components/Login/LoginStyles.css";
import "./components/Semaforo/SemaforoStyles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SemaforoMenu from "./pages/SemaforoMenu";
import Colores from "./pages/Colores";
import Home from "./pages/Home";
import { ModelPage } from "./pages/ModelPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/semaforo" element={<SemaforoMenu/>} />
        <Route path="/colores" element={<Colores/>} />
        <Route path="/modelos" element={<ModelPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
