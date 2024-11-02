// components/Login.js
import React from "react";
import Baraja from "./components/Baraja";
import Contador from "./components/Contador";
import styled from 'styled-components';

const Tablero = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const Movimientos = styled.div`
  display: flex;
  width: 100%;
`;

const Login = () => {
  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <Contador numero="5,5"></Contador>
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
      <Movimientos></Movimientos>
      <Tablero>
        <Baraja
          cartas={[
            { numero: "A", palo: "corazon" },
            { numero: "2", palo: "diamante" },
            { numero: "K", palo: "trebol" },
          ]}
        ></Baraja>
        <Contador numero="7,5" showLabel label="Jugador"></Contador>
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
    </div>
  );
};

export default Login;
