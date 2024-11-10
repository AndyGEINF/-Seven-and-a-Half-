// components/Login.js
import React, { useState } from "react";
import Baraja from "./components/Baraja";
import Contador from "./components/Contador";
import styled from "styled-components";
import Button from "./components/Button";
import mesaCasino from "./assets/images/mesaCasino.png";
import { useLocation } from "react-router-dom";


const deck = [
  // Corazones
  { palo: 'corazon', numero: 'A' },
  { palo: 'corazon', numero: '2' },
  { palo: 'corazon', numero: '3' },
  { palo: 'corazon', numero: '4' },
  { palo: 'corazon', numero: '5' },
  { palo: 'corazon', numero: '6' },
  { palo: 'corazon', numero: '7' },
  { palo: 'corazon', numero: 'J' },
  { palo: 'corazon', numero: 'Q' },
  { palo: 'corazon', numero: 'K' },

  // Diamantes
  { palo: 'diamante', numero: 'A' },
  { palo: 'diamante', numero: '2' },
  { palo: 'diamante', numero: '3' },
  { palo: 'diamante', numero: '4' },
  { palo: 'diamante', numero: '5' },
  { palo: 'diamante', numero: '6' },
  { palo: 'diamante', numero: '7' },
  { palo: 'diamante', numero: 'J' },
  { palo: 'diamante', numero: 'Q' },
  { palo: 'diamante', numero: 'K' },

  // Tréboles
  { palo: 'trebol', numero: 'A' },
  { palo: 'trebol', numero: '2' },
  { palo: 'trebol', numero: '3' },
  { palo: 'trebol', numero: '4' },
  { palo: 'trebol', numero: '5' },
  { palo: 'trebol', numero: '6' },
  { palo: 'trebol', numero: '7' },
  { palo: 'trebol', numero: 'J' },
  { palo: 'trebol', numero: 'Q' },
  { palo: 'trebol', numero: 'K' },

  // Picas
  { palo: 'diamante', numero: 'A' },
  { palo: 'diamante', numero: '2' },
  { palo: 'diamante', numero: '3' },
  { palo: 'diamante', numero: '4' },
  { palo: 'diamante', numero: '5' },
  { palo: 'diamante', numero: '6' },
  { palo: 'diamante', numero: '7' },
  { palo: 'diamante', numero: 'J' },
  { palo: 'diamante', numero: 'Q' },
  { palo: 'diamante', numero: 'K' },
];

const Game = styled.div`
  height: 100vh;
  max-width: 100vw;
  background-image: url(${mesaCasino});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Tablero = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const Movimientos = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const TableGame = () => {
  const location = useLocation();
  const { name, money } = location.state || {};

  const [playerHand, setPlayerHand] = useState([]);
  const [currentDeck, setCurrentDeck] = useState([...deck]);

  console.warn(playerHand);
  // Función para obtener una carta aleatoria
  const drawRandomCard = () => {
    if (currentDeck.length === 0) return null; // Si no hay cartas disponibles

    // Obtener un índice aleatorio
    const randomIndex = Math.floor(Math.random() * currentDeck.length);
    // Obtener la carta de ese índice y una copia del mazo sin esa carta
    const card = currentDeck[randomIndex];
    const newDeck = currentDeck.filter((_, index) => index !== randomIndex);

    // Actualizar el mazo y la mano del jugador
    setCurrentDeck(newDeck);
    setPlayerHand([...playerHand, card]);
  };
  
  // Iniciar con una carta para el jugador
  React.useEffect(() => {
    drawRandomCard(); // Tomar una carta inicial al cargar el componente
  }, []);

  console.warn(playerHand);

  return (
    <Game>
      <Tablero>
        <Baraja
          cartas={playerHand}
        ></Baraja>
        <Contador numero="7,5" showLabel label="Dealer"></Contador>
      </Tablero>
      <Movimientos>
        <Button icon="more" showIcon label="Card" onClick={drawRandomCard}></Button>
        <Button icon="hand" showIcon label="Stop"></Button>
      </Movimientos>
      <Tablero className="p-4">
        <Baraja
          cartas={playerHand}
        ></Baraja>
        <Contador numero="7,5" showLabel label={name}></Contador>
      </Tablero>
    </Game>
  );
};

export default TableGame;
