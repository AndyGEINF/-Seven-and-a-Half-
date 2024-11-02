import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PantallaInicial from './PantallaInicial.js'; // Importa PantallaInicial
import Login from './Login.js'; // Importa Login

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PantallaInicial />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
