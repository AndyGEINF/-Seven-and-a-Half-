import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Carta from './components/Carta/Carta.js'
import './App.css';

const Container = styled.div`
  padding:20px;
`;
const App = () => {
  return (
    <>
    <div className="pantalla-inicial">
      <h1>SEVEN & HALF</h1>
      <h2>¡Ganar dinero nunca fue tan fácil!</h2>
      <button>Comenzar</button>
    </div>
    <Container>
      <Carta palo="trebol" numero="J">

      </Carta>
    </Container>
    </>
  );
};


export default App;
