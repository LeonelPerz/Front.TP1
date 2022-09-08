import "./App.css";
import Login from "./components/Login/Login.jsx";
import "./components/Semaforo/SemaforoStyles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SemaforoMenu from "./pages/SemaforoMenu";
import Colores from "./pages/Colores";
import Home from "./pages/Home";
import { ModelPage } from "./pages/ModelPage";
import Container from "@mui/material/Container";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/semaforo" element={<SemaforoMenu />} />
          <Route path="/colores" element={<Colores />} />
          <Route path="/modelos" element={<ModelPage />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
