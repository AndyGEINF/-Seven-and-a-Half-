import React from "react";
import styled from "styled-components";
import Carta from "../Carta";

const BarajaContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 100px;
  overflow: hidden;
`;

// Estilo para cada carta, con desplazamiento para que se sobrepongan
const CartaStyled = styled.div`
  position: absolute;
  left: ${({ index, total }) => `calc(50% - ${total * 20}px + ${index * 40}px)`};  /* Cálculo para centrar y distribuir las cartas */
  top: 0px;
  z-index: ${({ index }) => index}; /* Controlar el orden de apilamiento */
  transition: all 0.2s ease;
`;

const Baraja = ({ cartas, onCartaHover }) => {
  const total = cartas.length;

  return (
    <BarajaContainer>
      {cartas.map((carta, index) => {
        return (
          <CartaStyled key={index} index={index} total={total}>
            <Carta
              key={index}
              numero={carta.numero}
              palo={carta.palo}
              onMouseEnter={() => onCartaHover(carta)}
              onMouseLeave={() => onCartaHover(null)}
            />
          </CartaStyled>
        );
      })}
    </BarajaContainer>
  );
};

export default Baraja;
