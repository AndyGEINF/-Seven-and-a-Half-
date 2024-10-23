import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import diamante from '../../assets/images/diamante.svg';
import corazon from '../../assets/images/corazon.svg';
import pica from '../../assets/images/pica.svg';
import trebol from '../../assets/images/trebol.svg';


// Define el componente 'Carta' con estilos en JS usando styled-components
const CartaContainer = styled.div`
  height: 180px;
  width: 120px;
  padding: 10px;
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10%;
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
  font-size: 48px;
  margin-left: 10px;
`;

const PaloImagen = styled.img`
  width: 40px;
  height: 40px;
`;

//El diccionario no es mejor ponerlo fuera de Carta?
//Definicions


const Carta = ({ numero, palo }) => {

    const palos = {
        diamante: diamante,
        corazon: corazon,
        pica: pica,
        trebol: trebol,
    };

    return (
        <CartaContainer palo={palo}>
            <Numero>{numero}</Numero>
            <PaloImagen src={palos[palo]} alt={`Palo de ${palo}`} />
        </CartaContainer>
    );
};

Carta.propTypes = {
    numero: PropTypes.string.isRequired,
    palo: PropTypes.oneOf(['diamante', 'corazon', 'pica', 'trebol']).isRequired,
};

export default Carta;