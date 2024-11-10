import React from 'react';
import styled from "styled-components";
import ICONS from '../../assets/icons';
import COLORS from '../../styles/colors';

const IconContainer = styled.div`
    display: flex;
    width: ${({ tamanyo }) => tamanyo}px;
    height: ${({ tamanyo }) => tamanyo}px;
`;

const Icon = ( {iconName, size, color} ) => {
    const IconComponent = ICONS[iconName];

    if (!IconComponent) {
        console.warn(`Icono "${iconName}" no encontrado`);
        return null; // Devuelve null si el icono no existe
    }

    return (
        <IconContainer tamanyo={size}>
            <IconComponent size={size} color={color} />
        </IconContainer>
    );
};

Icon.defaultProps = {
    size: 24,
    color: COLORS.neutral0,
}

export default Icon;