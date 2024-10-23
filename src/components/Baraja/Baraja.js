import React, { useState } from 'react';
import styled from 'styled-components';
import Carta from './Carta'; // Asegúrate de que la ruta sea correcta

const BarajaContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
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
      {cartasEnBaraja.map((carta, index) => (
        <Carta 
          key={index}
          numero={carta.numero}
          palo={carta.palo}
          onMouseEnter={() => onCartaHover(carta)} // Invoca la función de hover
          onMouseLeave={() => onCartaHover(null)} // Resetea el hover
        />
      ))}
      {/* Aquí puedes incluir un botón o funcionalidad para agregar nuevas cartas */}
    </BarajaContainer>
  );
};

export default Baraja;