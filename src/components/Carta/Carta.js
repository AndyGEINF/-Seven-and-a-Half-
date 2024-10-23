import React from 'react';
import styled from 'styled-components';


// Define el componente 'Carta' con estilos en JS usando styled-components
const CartaContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 300px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const CartaImagen = styled.img`
  width: 100%;
  border-radius: 8px 8px 0 0;
`;

const CartaContenido = styled.div`
  padding: 8px 0;
`;

const CartaTitulo = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const CartaTexto = styled.p`
  font-size: 1rem;Carta
  color: #666;
`;

const Carta = ({ palo, numero }) => {
  return (
    <CartaContainer>
      <CartaImagen src={imagen} alt="Imagen de la carta" />
      <CartaContenido>
        <CartaTitulo>{titulo}</CartaTitulo>
        <CartaTexto>{contenido}</CartaTexto>
      </CartaContenido>
    </CartaContainer>
  );
};

export default Carta;