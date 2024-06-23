// Player.tsx
import React from 'react';

interface PlayerProps {
    position: { x: number, y: number };
    tileSize: number;
}

const Player: React.FC<PlayerProps> = ({ position, tileSize }) => {
    const playerStyle: React.CSSProperties = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: 'blue',
        position: 'absolute',
        top: position.y * tileSize,
        left: position.x * tileSize,
        transition: 'top 0.3s, left 0.3s'
    };

    return <div style={playerStyle}></div>;
}

export default Player;
