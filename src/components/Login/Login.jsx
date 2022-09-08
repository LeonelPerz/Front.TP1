import { useState } from "react";
import Input from "../Input/Input";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const database = [
    {
      username: "administrador",
      password: "1234",
    },
    {
      username: "supervisordecalidad",
      password: "1234",
    },
    {
      username: "supervisordelinea",
      password: "1234",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      setError("");
      navigate("/home", { replace: true });
    } else {
      setError("Usuario y/o contraseña invalidos");
    }
  };

  return (
    <div>
      <Input
        placeholder="Username"
        value={username}
        onChange={setUsername}
        type="text"
      />
      <Input
        placeholder="Password"
        value={password}
        onChange={setPassword}
        type="password"
      />
      <Button  variant="contained" size='small' onClick={handleSubmit}> 
      Login 
      </Button>
      
      <div>{error}</div>
    </div>
  );
};

export default Login;
