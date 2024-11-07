import React from "react";
import styled from "styled-components";
import Icon from "../Icon";

const Boton = styled.button`
  background-color: green;
  color: white;
  font-size: 28px;
  border-style: none;
  padding: 5px 10px;
`;

const BotonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = ({ label, icon, showIcon }) => {
  return (
    <Boton>
        <BotonContainer>
            {showIcon && <Icon iconName={icon}></Icon>}
            {label}
        </BotonContainer>
    </Boton>
  );
};

export default Button;
