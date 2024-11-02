import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Boton = styled.button`
    background-color: green;
    color: white;
    font-size: 28px;
    border-style: none;
`;

const Button = ({ label, icon, showIcon }) => {
    return(
        <Boton>
          {label}
        </Boton>
    );
};

Button.propTypes = {
    numero: PropTypes.string.isRequired,
};

export default Button;