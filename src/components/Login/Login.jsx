import React, { useState } from "react";
import {Link} from "react-router-dom";

function Login() {
  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  
  const database = [
    {
      username: "administrador",
      password: "1234"
    },
    {
      username: "supervisordecalidad",
      password: "1234"
    },
    {
        username: "supervisordelinea",
        password: "1234"
    }
  ];

  const errors = {
    uname: "Usuario incorrecto",
    pass: "Contraseña incorrecta"
  };


  const handleSubmit = (event) => {
    
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
    
  };

  
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Usuario </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Contraseña </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (

    
    <div className="login">
      <div className="login-form">
        <div className="title">Iniciar sesión</div>
        {isSubmitted ? <div>El usuario inició sesión correctamente</div> : renderForm}
      </div>
    </div>


  );
}

export default Login;