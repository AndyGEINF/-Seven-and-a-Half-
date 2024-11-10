// components/Login.js
<<<<<<< HEAD
import React from "react";
import Baraja from "./components/Baraja";
import Contador from "./components/Contador";
import styled from 'styled-components';
import Button from "./components/Button";
import mesaCasino from './assets/images/mesaCasino.png';
import { useLocation } from 'react-router-dom';
=======
import React, { useState, useEffect } from "react";
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
  { palo: 'pica', numero: 'A' },
  { palo: 'pica', numero: '2' },
  { palo: 'pica', numero: '3' },
  { palo: 'pica', numero: '4' },
  { palo: 'pica', numero: '5' },
  { palo: 'pica', numero: '6' },
  { palo: 'pica', numero: '7' },
  { palo: 'pica', numero: 'J' },
  { palo: 'pica', numero: 'Q' },
  { palo: 'pica', numero: 'K' },
];
>>>>>>> recovery-branch

const Game = styled.div`
  height: 100vh;
  max-width: 100vw;
  background-image: url(${mesaCasino});
<<<<<<< HEAD
  background-size: cover; 
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Tablero = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;

const Tableros = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
=======
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap: 50px;

  transition: box-shadow 1s ease-in-out;
  ${({ end }) =>
    end &&
    `
      box-shadow: inset 0 0 200px 200px rgba(0, 0, 0, 0.7);
    `}
  
`;

const Jugador = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 30px;
>>>>>>> recovery-branch
`;

const Movimientos = styled.div`
  display: flex;
  flex-direction: row;
<<<<<<< HEAD
  padding: 20px;
=======
>>>>>>> recovery-branch
  gap: 50px;
`;

const TableGame = () => {
<<<<<<< HEAD
    const location = useLocation();
    const { name, money } = location.state || {};

  return (
    <Game>
      {/*<h2>Iniciar Sesión</h2>*/}
      <Tableros>
        <Tablero>
          <Baraja
            cartas={[
              { numero: "A", palo: "corazon" },
              { numero: "2", palo: "diamante" },
              { numero: "K", palo: "trebol" },
            ]}
          ></Baraja>
          <Contador numero="7,5" showLabel label="Dealer"></Contador>
        </Tablero>
        <Movimientos>
          <Button icon="more" showIcon label="Card"></Button>
          <Button icon="hand" showIcon label="Stop"></Button>
        </Movimientos>
        <Tablero>
          <Baraja
            cartas={[
              { numero: "A", palo: "corazon" },
              { numero: "2", palo: "diamante" },
              { numero: "K", palo: "trebol" },
            ]}
          ></Baraja>
          <Contador numero="7,5" showLabel label={name}></Contador>
        </Tablero>
      </Tableros>
      {/* 
      <Baraja
        cartas={[
          { numero: "A", palo: "corazon" },
        ]}
      ></Baraja>
      <Baraja
        cartas={[
          { numero: "A", palo: "corazon" },
          { numero: "2", palo: "diamante" },
        ]}
      ></Baraja>
      <Baraja
        cartas={[
          { numero: "A", palo: "corazon" },
          { numero: "2", palo: "diamante" },
          { numero: "K", palo: "trebol" },
        ]}
      ></Baraja>
      <Baraja
        cartas={[
          { numero: "A", palo: "corazon" },
          { numero: "2", palo: "diamante" },
          { numero: "K", palo: "trebol" },
          { numero: "7", palo: "pica" }
        ]}
      ></Baraja>
      <Baraja
        cartas={[
          { numero: "A", palo: "corazon" },
          { numero: "10", palo: "diamante" },
          { numero: "K", palo: "trebol" },
          { numero: "7", palo: "pica" },
          { numero: "K", palo: "trebol" }
        ]}
      ></Baraja>
      <Baraja
        cartas={[
          { numero: "A", palo: "corazon" },
          { numero: "10", palo: "diamante" },
          { numero: "K", palo: "trebol" },
          { numero: "7", palo: "pica" },
          { numero: "K", palo: "trebol" },
          { numero: "7", palo: "pica" }
        ]}
      ></Baraja>
      <Baraja
        cartas={[
          { numero: "A", palo: "corazon" },
          { numero: "10", palo: "diamante" },
          { numero: "K", palo: "trebol" },
          { numero: "7", palo: "pica" },
          { numero: "K", palo: "trebol" },
          { numero: "7", palo: "pica" },
          { numero: "K", palo: "trebol" }
        ]}
      ></Baraja>
      <Baraja
        cartas={[
          { numero: "A", palo: "corazon" },
          { numero: "10", palo: "diamante" },
          { numero: "K", palo: "trebol" },
          { numero: "7", palo: "pica" },
          { numero: "K", palo: "trebol" },
          { numero: "7", palo: "pica" },
          { numero: "Q", palo: "diamante" },
          { numero: "K", palo: "trebol" }
        ]}
      ></Baraja>
      <Baraja
        cartas={[
          { numero: "A", palo: "corazon" },
          { numero: "10", palo: "diamante" },
          { numero: "K", palo: "trebol" },
          { numero: "7", palo: "pica" },
          { numero: "K", palo: "trebol" },
          { numero: "7", palo: "pica" },
          { numero: "Q", palo: "diamante" },
          { numero: "Q", palo: "pica" },
          { numero: "K", palo: "trebol" }
        ]}
      ></Baraja>
      <Baraja
        cartas={[
          { numero: "A", palo: "corazon" },
          { numero: "10", palo: "diamante" },
          { numero: "K", palo: "trebol" },
          { numero: "7", palo: "pica" },
          { numero: "K", palo: "trebol" },
          { numero: "7", palo: "pica" },
          { numero: "Q", palo: "diamante" },
          { numero: "Q", palo: "pica" },
          { numero: "Q", palo: "diamante" },
          { numero: "K", palo: "trebol" }
        ]}
      ></Baraja>
      <Baraja
        cartas={[
          { numero: "A", palo: "corazon" },
          { numero: "10", palo: "diamante" },
          { numero: "K", palo: "trebol" },
          { numero: "7", palo: "pica" },
          { numero: "K", palo: "trebol" },
          { numero: "7", palo: "pica" },
          { numero: "Q", palo: "diamante" },
          { numero: "Q", palo: "pica" },
          { numero: "Q", palo: "diamante" },
          { numero: "A", palo: "corazon" },
          { numero: "K", palo: "trebol" }
        ]}
      ></Baraja>
      <Baraja
        cartas={[
          { numero: "K", palo: "corazon" },
          { numero: "K", palo: "trebol" },
          { numero: "K", palo: "diamante" },
          { numero: "K", palo: "pica" },
          { numero: "Q", palo: "corazon" },
          { numero: "Q", palo: "trebol" },
          { numero: "Q", palo: "diamante" },
          { numero: "Q", palo: "pica" },
          { numero: "J", palo: "corazon" },
          { numero: "J", palo: "trebol" },
          { numero: "J", palo: "diamante" },
          { numero: "J", palo: "pica" },
        ]}
      ></Baraja>
      <Baraja
        cartas={[
          { numero: "K", palo: "corazon" },
          { numero: "K", palo: "trebol" },
          { numero: "K", palo: "diamante" },
          { numero: "K", palo: "pica" },
          { numero: "Q", palo: "corazon" },
          { numero: "Q", palo: "trebol" },
          { numero: "Q", palo: "diamante" },
          { numero: "Q", palo: "pica" },
          { numero: "J", palo: "corazon" },
          { numero: "J", palo: "trebol" },
          { numero: "J", palo: "diamante" },
          { numero: "J", palo: "pica" },
          { numero: "A", palo: "corazon" },
        ]}
      ></Baraja>
      <Baraja
        cartas={[
          { numero: "K", palo: "corazon" },
          { numero: "K", palo: "trebol" },
          { numero: "K", palo: "diamante" },
          { numero: "K", palo: "pica" },
          { numero: "Q", palo: "corazon" },
          { numero: "Q", palo: "trebol" },
          { numero: "Q", palo: "diamante" },
          { numero: "Q", palo: "pica" },
          { numero: "J", palo: "corazon" },
          { numero: "J", palo: "trebol" },
          { numero: "J", palo: "diamante" },
          { numero: "J", palo: "pica" },
          { numero: "A", palo: "corazon" },
          { numero: "A", palo: "trebol" },
        ]}
      ></Baraja>
      */}
      
      {/* Aquí puedes agregar tu formulario de inicio de sesión */}
=======
  const location = useLocation();
  const { name, money } = location.state || {};

  const [dealerHand, setDealerHand] = useState([]);
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

  const points = (hand) => {
    return hand.reduce((total, carta) => {
      let valor = 0;
      if(carta.numero === 'A'){
        valor = 1;
      }
      else if(['J', 'Q', 'K'].includes(carta.numero)){
        valor=0.5;
      }
      else{
        valor = parseFloat(carta.numero);
      }
      return total+valor;
    }, 0);
  };

  // Verifica si el jugador ha superado el límite y vacía la baraja si es así
  useEffect(() => {
    if (points(playerHand) > 7.5) {
      setPlayerHand([]); // Vacía la mano del jugador
    }
  }, [playerHand]); // Solo se ejecuta cuando `playerHand` cambia



  return (
    <Game end={points(playerHand) > 7.5}>
      <Jugador>
        <Contador numero={points(dealerHand)} showLabel label="Dealer"></Contador>
        <Baraja
          cartas={dealerHand}
        ></Baraja>
      </Jugador>
      <Movimientos>
        <Button icon="more" showIcon label="Card" onClick={drawRandomCard}></Button>
        <Button icon="hand" showIcon label="Stop"></Button>
      </Movimientos>
      <Jugador className="p-4">
        <Contador numero={points(playerHand)} showLabel label={name}></Contador>
        <Baraja
          cartas={playerHand}
        >
          {console.warn(playerHand)}
          {console.warn(currentDeck)}
        </Baraja>
      </Jugador>
>>>>>>> recovery-branch
    </Game>
  );
};

export default TableGame;
