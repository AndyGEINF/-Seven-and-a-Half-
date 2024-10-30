// components/PantallaInicial.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PantallaInicial.css'; // Crea un archivo CSS si necesitas estilos específicos



const PantallaInicial = () => {
  const navigate = useNavigate();

  const handleComenzar = () => {
    navigate('/login'); // Navega a la ruta de inicio de sesión
  };

  return (
    <div className="pantalla-inicial">
      <h1>SEVEN & HALF</h1>
      <h2>¡Ganar dinero nunca fue tan fácil!</h2>
      <button onClick={handleComenzar}>Comenzar</button>
    </div>
  );
};

export default PantallaInicial;
