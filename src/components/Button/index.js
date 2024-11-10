import React from "react";
import styled from "styled-components";
import Icon from "../Icon";
import COLORS from "../../styles/colors";

const Boton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  color: white;
  font-size: 28px;
  border-style: none;
  padding: 5px 10px;
  border: 1px solid ${COLORS.neutral700};
  border-radius: 8px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${COLORS.neutral600};
    color: ${COLORS.neutral0};
    transform: scale(1.05);
    box-shadow: 4px 6px 12px rgba(0, 0, 0, 0);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.4);
  }
`;

const Button = ({ label, icon, showIcon }) => {
  return (
    <Boton>
      {showIcon && <Icon iconName={icon}></Icon>}
      {label}
    </Boton>
  );
};

export default Button;