// components/Login.js
import React from 'react';
import Carta from './components/Carta/Carta';

const Login = () => {
  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <Carta numero="7" palo="corazon"></Carta>
      {/* Aquí puedes agregar tu formulario de inicio de sesión */}
    </div>
  );
};

export default Login;
