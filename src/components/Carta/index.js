import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../Icon';


// Define el componente 'Carta' con estilos en JS usando styled-components
const CartaContainer = styled.div`
  height: 100px;
  width: 60px;
  padding: 10px;
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  border-radius: 10%;
  border: 2px solid rgb(0,0,0, 0.6);
  background-color: ${({ palo }) => {
    switch (palo) {
      case 'diamante':
        return '#7796cb'; // color para diamante
      case 'corazon':
        return '#fa5f43'; // color para corazón
      case 'pica':
        return '#8a8985'; // color para pica
      case 'trebol':
        return '#02a879'; // color para trébol
      default:
        return '#FFFFFF'; // color por defecto
    }
  }};
`;

const Numero = styled.span`
  color: white;
  font-size: 28px;
  margin-left: 5px;
`;

//El diccionario no es mejor ponerlo fuera de Carta?
//Definicions


const Carta = ({ numero, palo, style }) => {
    return (
        <CartaContainer style={style} palo={palo}>
            <Numero>{numero}</Numero>
            <Icon iconName={palo}></Icon>
        </CartaContainer>
    );
};

Carta.propTypes = {
    numero: PropTypes.string.isRequired,
    palo: PropTypes.oneOf(['diamante', 'corazon', 'pica', 'trebol']).isRequired,
};

export default Carta;