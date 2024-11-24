import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import mesaCasino from './assets/images/mesaCasino.png';

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #cccccc; 
  border-radius: 4px;
  width: 200px;
  margin-bottom: 10px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  appearance: textfield;
`;

const Background = styled.div`
  height: 100vh;
  max-width: 100vw;
  background-image: url(${mesaCasino});
  background-size: cover; 
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  background-color: #ffffffe6; 
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px #00000040; 
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #21c741; 
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #1c5a28;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
  text-align: center;
  text-shadow: 2px 2px 4px #aaaaaa; 
`;

const Login = () => {
  const [name, setName] = useState('');
  const [money, setMoney] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const validMoney = isNaN(money) || money === '' ? 0 : parseFloat(money);
    const validName = name.trim() === '' ? 'Player1' : name;
    navigate('/game', { state: { name: validName, money: validMoney } });
  };

  const handleNameChange = (e) => {
    const canviName = e.target.value;
    if (canviName.length <= 8) {
      setName(canviName);
    }
  };

  const handleMoneyChange = (e) => {
    const canviMoney = e.target.value;
    if (canviMoney.length <= 8) {
      setMoney(canviMoney);
    }
  };

  return (
    <Background>
      <LoginBox>
        <Title>WHO IS PLAYING</Title>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          
          onChange={handleNameChange}
        />
        <Input
          type="number"
          placeholder="Amount of money"
          value={money}
        
          onFocus={() => money === '0' && setMoney('')}
          onBlur={() => money === '' && setMoney('0')}
          onChange={handleMoneyChange}
        />
        <Button onClick={handleLogin}>Start the game</Button>
      </LoginBox>
    </Background>
  );
};

export default Login;
