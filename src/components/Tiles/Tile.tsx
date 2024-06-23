import React from 'react';

interface TileProps {
  image?: string;
  number: number;
}

const Tile: React.FC<TileProps> = ({ image, number }) => {
  const className = (number % 2 === 0) ? 'black-tile' : 'white-tile';

  return (
    <div className={`tile ${className}`}>
      {image && <img src={image} alt="" className="chess-piece" />}
    </div>
  );
};

export default Tile;
