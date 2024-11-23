import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "../../styles/colors";
import Button from "../Button";

// Definimos los tipos posibles y sus configuraciones
const modalTypes = {
    win: {
      title: "You Win!",
      subtitle: "Congratulations on your victory!",
      backgroundColor: COLORS.success,  // ejemplo de color
    },
    lostWithDealer: {
      title: "Lost to the Dealer",
      subtitle: "Better luck next time!",
      backgroundColor: COLORS.warning,  // ejemplo de color
    },
    lost: {
      title: "You Lost",
      subtitle: "Don't give up! Try again.",
      backgroundColor: COLORS.error,  // ejemplo de color
    },
  };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${COLORS.neutral200};
  padding: 20px;
  gap: 20px;
  z-index:2000;
`;

const Title = styled.div`
`;

const Subtitle = styled.div`
`;

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

const NewRound = styled.div`
  display: flex;
  flex-direction: row;
`;

const OutcomeModal = ({ title, subtitle, maxAmount, onNewRound, onEndGame, onSetBet, type }) => {
  const [amount, setAmount] = useState("");

  const modalConfig = modalTypes[type];

  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  const handleNewRound = () => {
    if(onSetBet) {
      onSetBet(amount);
    }
    onNewRound();
  };

  const isNextRoundEnabled = amount !== "" && amount > 0 && amount <= maxAmount;

  return (
    <Container>
      {!!modalConfig?.title && <Title>{modalConfig.title}</Title>}
      {!!modalConfig?.subtitle && <Subtitle>{modalConfig.subtitle}</Subtitle>}
      <NewRound>
        <Input type="number" placeholder="Amount of money" value={amount} onChange={handleInputChange} />
        <Button label={"New Round"} disabled={!isNextRoundEnabled} onClick={handleNewRound}></Button>
      </NewRound>
      <Button label={"End Game"} onClick={onEndGame}></Button>
    </Container>
  );
};
export default OutcomeModal;
