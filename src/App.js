import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PantallaInicial from './PantallaInicial.js'; // Importa PantallaInicial
import Login from './Login.js'; // Importa Login
import TableGame from './TableGame.js'; // Importa Game



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PantallaInicial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/game" element={<TableGame />} />
      </Routes>
    </Router>
  );
};

export default App;