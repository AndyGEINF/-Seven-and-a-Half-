import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

const Boton = styled.button`
    background-color: green;
    color: white;
    font-size: 28px;
    border-style: none;
    padding: 5px 10px;
`;

const Button = ( label, icon, showIcon ) => {
    return(
        <Boton>
          {showIcon && <Icon iconName={icon}></Icon>}
          {label}
        </Boton>
    );
};

export default Button;