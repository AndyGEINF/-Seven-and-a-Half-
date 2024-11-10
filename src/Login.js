import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import mesaCasino from './assets/images/mesaCasino.png';

<<<<<<< HEAD
<<<<<<< HEAD
const Tablero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
=======
=======
>>>>>>> recovery-branch

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;  background-color= red; 
  margin-right: 10px;

  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  
  -moz-appearance: textfield;
<<<<<<< HEAD
>>>>>>> 567a9f9aae52692d43c0ba65339f23d0b2420650
=======
>>>>>>> recovery-branch
`;

const Background = styled.div`
  height: 100vh;
  max-width: 100vw;
  background-image: url(${mesaCasino});
  background-size: cover; 
  background-position: center;
`;

const Login = () => {
  const [name, setName] = useState('');
  const [money, setMoney] = useState(0);
  const navigate = useNavigate(); // Hook per navegar a una altra ruta

  const handleLogin = () => {
    const validMoney = isNaN(money) || money === '' ? 0 : money;
    const validName = name.trim() === '' ? 'Player1' : name;
    // Navega a la página de juego enviando name y validMoney como el valor de money
    navigate('/game', { state: { name: validName, money: validMoney } });
  };

  const handleFocus = () => {
    if (money === 0) {
      setMoney('');
    }
  };

  const handleBlur = () => {
    if (money === '') {
      setMoney(0);
    }
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> recovery-branch
    <Background>
      <h2>Login</h2>
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Amount of money"
        value={money}
        onFocus={handleFocus} // Limpia el valor al fer click
        onBlur={handleBlur} // Restaura 0 si està buit
        onChange={(e) => setMoney(parseFloat(e.target.value))}
      />
      <button onClick={handleLogin}>Start the game</button>
    </Background>
  );  
<<<<<<< HEAD
>>>>>>> 567a9f9aae52692d43c0ba65339f23d0b2420650
};

export default Login;


=======
};

export default Login;
>>>>>>> recovery-branch
