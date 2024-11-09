// components/Login.js
import React from "react";
import Baraja from "./components/Baraja";
import Contador from "./components/Contador";
import styled from 'styled-components';
import Button from "./components/Button";
import mesaCasino from './assets/images/mesaCasino.png';

const Tablero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;

const Movimientos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 50px;
`;


const Game = styled.div`
  height: 100vh;
  background-image: url(${mesaCasino});
  background-size: cover; 
  background-position: center;
  display: flex;
  flex-direction: row;
`;

const Barajas = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Login = () => {
  return (
    <Game>
      {/*<h2>Iniciar Sesión</h2>*/}
      <Barajas>
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
          ]}
        ></Baraja>
      </Barajas>
      <Tablero>
        <Contador numero="7,5" showLabel label="Dealer"></Contador>
        <Contador numero="7,5" showLabel label="Jugador"></Contador>
        <Movimientos>
          <Button label="Card"></Button>
          <Button label="Stop"></Button>
        </Movimientos>
      </Tablero>
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

export default Login;
