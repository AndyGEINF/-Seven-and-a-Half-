import React, { useState } from 'react';
import styled from 'styled-components';
import Carta from '../Carta/Carta';

const POSICIONES_CARTAS = [
  { left: 10, top: 50, rotate: -84 },
  { left: 10, top: 50, rotate: -72 },
  { left: 10, top: 50, rotate: -60 },
  { left: 40, top: 30, rotate: -48 },
  { left: 40, top: 30, rotate: -36 },
  { left: 40, top: 30, rotate: -24 },
  { left: 40, top: 30, rotate: -12 },
  { left: 10, top: 50, rotate: 12 },
  { left: 10, top: 50, rotate: 24 },
  { left: 10, top: 50, rotate: 36 },
  { left: 40, top: 30, rotate: 48 },
  { left: 40, top: 30, rotate: 60 },
  { left: 40, top: 30, rotate: 72 },
  { left: 40, top: 30, rotate: 84 },
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
        let middleIndex = isEven ? numCartas / 2 - 1 : Math.floor(numCartas / 2);
        if(isEven && index>middleIndex){
          middleIndex++;
        }
        const offset = index - middleIndex;

        // Ajuste de altura basado en si el número de cartas es par o impar
        const topPosition = isEven ? Math.abs(offset) * 20 : Math.abs(offset) * 30;
        const leftPosition = 500 + offset * 50;
        const rotationAngle = offset * 12; // Ajusta el multiplicador según el efecto que quieras

        console.warn('top Position',index,topPosition);
        console.warn('Rotation Angle',index,rotationAngle);

        //Els graus van de un rang de -80 a 80. Si es senar la del centre sera 0, si es parell les del tindran graus.
        //Maxim hi hauran 14 cartas
        // Si son 2 hauria de ser top 

        //fer una lista de left, de height y de degrees



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
              left: `${leftPosition}px`,
              top: `${topPosition}px`,
              zIndex: index,
              transform: `rotate(${rotationAngle}deg)`
            }}
          />
        );
      })}
    </BarajaContainer>
  );
};

export default Baraja;