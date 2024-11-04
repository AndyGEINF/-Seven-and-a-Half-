import React from 'react';
import ICONS from '../../assets/icons';
import COLORS from '../../styles/colors';

const Icon = ( iconName, size, color ) => {
    const IconComponent = ICONS[iconName];

    if (!IconComponent) {
        console.warn(`Icono "${iconName}" no encontrado`);
        return null; // Devuelve null si el icono no existe
    }

    return <IconComponent size={size} color={color} />;
};

Icon.defaultProps = {
    size: 24,
    color: COLORS.neutral0,
}

export default Icon;
