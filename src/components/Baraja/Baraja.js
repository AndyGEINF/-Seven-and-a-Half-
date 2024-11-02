import React, { useState } from 'react';
import styled from 'styled-components';
import Carta from '../Carta/Carta';

const POSICIONES_CARTAS = [
  { left: 130, top: 260, rotate: -84 },
  { left: 140, top: 210, rotate: -72 },
  { left: 160, top: 160, rotate: -60 },
  { left: 200, top: 110, rotate: -48 },
  { left: 250, top: 70, rotate: -36 },
  { left: 300, top: 40, rotate: -24 },
  { left: 350, top: 20, rotate: -12 },
  { left: 400, top: 10, rotate: 0 },
  { left: 450, top: 20, rotate: 12 },
  { left: 500, top: 40, rotate: 24 },
  { left: 550, top: 70, rotate: 36 },
  { left: 600, top: 110, rotate: 48 },
  { left: 640, top: 160, rotate: 60 },
  { left: 660, top: 210, rotate: 72 },
  { left: 670, top: 260, rotate: 84 },
];

const BarajaContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  position: relative;
  height: 500px;
  width: 500px;
`;

const Baraja = ({ cartas, onAgregarCarta, onCartaHover }) => {
  const [cartasEnBaraja, setCartasEnBaraja] = useState(cartas);

  const agregarCarta = (nuevaCarta) => {
    setCartasEnBaraja((prevCartas) => [...prevCartas, nuevaCarta]);
    if (onAgregarCarta) {
      onAgregarCarta(nuevaCarta);
    }
  };

  return (
    <BarajaContainer>
      {cartasEnBaraja.map((carta, index) => {
        const numCartas = cartasEnBaraja.length;
        const isEven = numCartas % 2 === 0;
        let middleIndex = Math.floor(numCartas / 2);
        if(isEven && index>=middleIndex){
          middleIndex--;
        }
        const offset = index - middleIndex;
        console.warn('Num', numCartas)
        console.warn('Midle Index',middleIndex)

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

        return (
          <Carta
            key={index}
            numero={carta.numero}
            palo={carta.palo}
            onMouseEnter={() => onCartaHover(carta)}
            onMouseLeave={() => onCartaHover(null)}
            style={{
              position: 'absolute',
              //left: `${(index * 70)+50}px`,
              left: `${(posicion.left + extraLeft)}px`,
              top: `${posicion.top}px`,
              zIndex: index,
              transform: `rotate(${posicion.rotate}deg)`
            }}
          />
        );
      })}
    </BarajaContainer>
  );
};

export default Baraja;