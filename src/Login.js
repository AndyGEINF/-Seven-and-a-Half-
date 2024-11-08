import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";


const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  margin-right: 10px;

  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  
  -moz-appearance: textfield;
`;

const Login = () => {
  const [name, setName] = useState('');
  const [money, setMoney] = useState(0);
  const navigate = useNavigate(); // Hook per navegar a una altra ruta

  const handleLogin = () => {
    const validMoney = isNaN(money) || money === '' ? 0 : money;
  
    // Navega a la página de juego enviando name y validMoney como el valor de money
    navigate('/game', { state: { name, money: validMoney } });
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
    <div>
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
    </div>
  );  
};

export default Login;


