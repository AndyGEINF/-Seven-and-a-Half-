import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const CountContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    width: 50px;
    height: 50px;
    background-color: gray;
    border-radius: 100%;
    font-size: 28px;
    color: white;
`;

const Owner = styled.div`
    display:flex;
    color: green;
    font-size: 24px;
    font-weight: 700;
`;

const Contador = ({ numero, showLabel, label }) => {
    return(
        <Container>
            <CountContainer>
                {numero}
            </CountContainer>
            {showLabel && (
                <Owner>
                    {label}
                </Owner>
            )}
        </Container>
    );
};

Contador.propTypes = {
    numero: PropTypes.string.isRequired,
};

export default Contador;