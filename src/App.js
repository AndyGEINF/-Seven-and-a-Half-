import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Carta from './components/Carta/Carta.js'

const Container = styled.div`
  padding:20px;
`;
const App = () => {
  return (
    <Container>
      <Carta palo="trebol" numero="J">

      </Carta>
    </Container>
  );
};


export default App;
