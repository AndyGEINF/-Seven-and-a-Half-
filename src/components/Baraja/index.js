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
<<<<<<< HEAD
      {cartasEnBaraja.map((carta, index) => {
        const numCartas = cartasEnBaraja.length;
        const isEven = numCartas % 2 === 0;
        let middleIndex = Math.floor(numCartas / 2);
        if(isEven && index>=middleIndex){
          middleIndex--;
        }
        const offset = index - middleIndex;
        //console.warn('Num', numCartas)
        //console.warn('Midle Index',middleIndex)

        const posicion = POSICIONES_CARTAS[offset+7] || { left: 0, top: 0, rotate: 0 };

        //Els graus van de un rang de -80 a 80. Si es senar la del centre sera 0, si es parell les del tindran graus.
        //Maxim hi hauran 14 cartas
        // Si son 2 hauria de ser top 

        //fer una lista de left, de height y de degrees
        let extraLeft=0;
        if(isEven){
          if(index<middleIndex){
            extraLeft=20;
          }
          else{
            extraLeft=-20;
          }
        }

=======
      {cartas.map((carta, index) => {
>>>>>>> recovery-branch
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
