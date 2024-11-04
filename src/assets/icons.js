import React from 'react';

const CorazonIcon = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"/>
    </svg>
);

const DiamanteIcon = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M431.76 256c-69 42.24-137.27 126.89-175.76 224.78C217.51 382.89 149.25 298.24 80.24 256c69-42.24 137.27-126.89 175.76-224.78C294.49 129.11 362.75 213.76 431.76 256z"/>
    </svg>
);

// Definir los demás iconos como funciones de React
const PicaIcon = ({ size = 24, color = "currentColor" }) => (
    // SVG de Pica
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M24.705 17.092c-0.172-5.392-8.718-11.633-8.718-11.633s-8.855 6.467-8.692 11.633c0.139 4.418 4.652 5.992 7.518 3.432l-2.512 6.016 7.4-0-2.514-6.021c2.905 2.496 7.662 1.052 7.519-3.427z"/>
    </svg>
);

const TrebolIcon = ({ size = 24, color = "currentColor" }) => (
    // SVG de Trébol
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M477.443 295.143a104.45 104.45 0 0 1-202.26 36.67c-.08 68.73 4.33 114.46 69.55 149h-177.57c65.22-34.53 69.63-80.25 69.55-149a104.41 104.41 0 1 1-66.34-136.28 104.45 104.45 0 1 1 171.14 0 104.5 104.5 0 0 1 135.93 99.61z"/>
    </svg>
);

const MoreIcon = ({ size = 24, color = "currentColor" }) => (
    // SVG de "More"
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44771 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44771 11 8 11H11V8Z"/>
    </svg>
);

// Diccionario de iconos
const ICONS = {
    corazon: CorazonIcon,
    diamante: DiamanteIcon,
    pica: PicaIcon,
    trebol: TrebolIcon,
    more: MoreIcon,
};

export default ICONS;