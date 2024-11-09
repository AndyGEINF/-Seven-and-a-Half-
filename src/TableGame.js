// components/Login.js
import React from "react";
import Baraja from "./components/Baraja";
import Contador from "./components/Contador";
import styled from 'styled-components';
import Button from "./components/Button";
import mesaCasino from './assets/images/mesaCasino.png';
import { useLocation } from 'react-router-dom';

const Game = styled.div`
  height: 100vh;
  max-width: 100vw;
  background-image: url(${mesaCasino});
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
`;

const Movimientos = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  gap: 50px;
`;

const TableGame = () => {
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
    </Game>
  );
};

export default TableGame;
