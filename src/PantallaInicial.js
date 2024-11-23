// components/PantallaInicial.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import mesaCasino from './assets/images/mesaCasino.png'; 

// Animació neon
const neon = keyframes`
  0% {
    text-shadow: 3px 3px 5px rgba(17, 199, 17, 0.5);
  }
  50% {
    text-shadow: 3px 3px 5px rgba(36, 4, 216, 0.781);
  }
  100% {
    text-shadow: 3px 3px 5px rgba(255, 0, 0, 0.5);
  }
`;

// Contenidor principal
const Container = styled.div`
  height: 100vh;
  background-image: url(${mesaCasino});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// (h1)
const H1 = styled.h1`
  font-size: 6rem;
  color: #e0eede; /* rgb(224, 238, 222) en hex */
  font-family: cursive;
  margin-top: -250px;
  text-align: center;
  animation: ${neon} 1.5s ease-in-out infinite alternate;
`;

// (h2)
const H2 = styled.h2`
  font-size: 2rem;
  color: #ffffff; /* rgb(255, 255, 255) en hex */
  font-family: 'Montserrat', sans-serif;
  margin-top: 50px;
  text-align: center;
`;

// Button
const Button = styled.button`
  font-size: 1.5rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  padding: 10px 20px;
  margin-top: 50px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 50px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.85);
  }
`;

const PantallaInicial = () => {
  const navigate = useNavigate();

  const handleComenzar = () => {
    navigate('/login'); 
  };

  return (
    <Container>
      <H1>SEVEN & HALF</H1>
      <H2>¡Make money never been that easy!</H2>
      <Button onClick={handleComenzar}>Login</Button>
    </Container>
  );
};

export default PantallaInicial;
