//import Player from '../Player/Player';

/*
const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8]
const horizontalAxis = [1, 2, 3, 4, 5, 6, 7, 8]

export default function Battlemap() {
    let map = [];

    for (let i = verticalAxis.length-1; i >= 0; i--) {
        for (let j = 0; j<horizontalAxis.length; j++) {
            const num = j + i + 2;

            if (num % 2 === 0) {
                map.push(
                    <div className="title black-tile"></div>
                );
            } else {
                map.push(
                    <div className="title white-tile"></div>
                );
            }
        }
    }
    return <div id= "battlemap">{map}</div>
}
*/
import { MouseEvent, useRef, useState } from "react";
import Tile from "../Tiles/Tile";
import './Battlemap.css';
import { useNavigate } from "react-router-dom";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

interface Piece {
  image: string;
  speed: number;
  x: number;
  y: number;
}

const initialBoardState: Piece[] = [
  { image: "/assets/dt-fighter.png", speed: 30, x: 1, y: 1 },
  { image: "/assets/dt-barbarian.png", speed: 30, x: 2, y: 2 },
  { image: "/assets/dt-goblin.png", speed: 30, x: 3, y: 6 },
  { image: "/assets/dt-goblin.png", speed: 30, x: 5, y: 6 },
  { image: "/assets/dt-goblin.png", speed: 30, x: 4, y: 5 }
];

export default function Battlemap() {
  const [activePiece, setActivePiece] = useState<HTMLElement | null>(null);
  const [gridX, setGridX] = useState(0);
  const [gridY, setGridY] = useState(0);
  const [pieces, setPieces] = useState<Piece[]>(initialBoardState);
  const battlemapRef = useRef<HTMLDivElement>(null);

  function grabPiece(e: React.MouseEvent) {
    const element = e.target as HTMLElement;
    const battlemap = battlemapRef.current;
    if (element.classList.contains("chess-piece") && battlemap) {
      setGridX(Math.floor((e.clientX - battlemap.offsetLeft) / 100));
      setGridY(Math.abs(Math.ceil((e.clientY - battlemap.offsetTop - 800) / 100)));

      const x = e.clientX - 50;
      const y = e.clientY - 50;
      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;

      setActivePiece(element);
    }
  }

  function movePiece(e: React.MouseEvent) {
    const battlemap = battlemapRef.current;
    if (activePiece && battlemap) {
      const minX = battlemap.offsetLeft - 25;
      const minY = battlemap.offsetTop - 25;
      const maxX = battlemap.offsetLeft + battlemap.clientWidth - 75;
      const maxY = battlemap.offsetTop + battlemap.clientHeight - 75;
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      activePiece.style.position = "absolute";

      if (x < minX) {
        activePiece.style.left = `${minX}px`;
      } else if (x > maxX) {
        activePiece.style.left = `${maxX}px`;
      } else {
        activePiece.style.left = `${x}px`;
      }

      if (y < minY) {
        activePiece.style.top = `${minY}px`;
      } else if (y > maxY) {
        activePiece.style.top = `${maxY}px`;
      } else {
        activePiece.style.top = `${y}px`;
      }
    }
  }

  function dropPiece(e: React.MouseEvent) {
    const battlemap = battlemapRef.current;
    if (activePiece && battlemap) {
      const x = Math.floor((e.clientX - battlemap.offsetLeft) / 100);
      const y = Math.abs(Math.ceil((e.clientY - battlemap.offsetTop - 800) / 100));

      setPieces((value) => {
        const pieces = value.map((p) => {
          if (p.x === gridX && p.y === gridY) {
            // Calculate the allowed movement range based on speed
            const allowedMovement = p.speed / 10;
            if (Math.abs(x - gridX) <= allowedMovement && Math.abs(y - gridY) <= allowedMovement) {
              p.x = x;
              p.y = y;
            }
          }
          return p;
        });
        return pieces;
      });
      setActivePiece(null);
    }
  }

  let board = [];

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2;
      let image = undefined;

      pieces.forEach((p) => {
        if (p.x === i && p.y === j) {
          image = p.image;
        }
      });

      board.push(<Tile key={`${j},${i}`} image={image} number={number} />);
    }
  }

  const navigate = useNavigate();

  return (
    <>
      <div className="sticky-bar-top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" style={{ height: '30px', width: '30px' }} onClick={() => navigate(-2)}>
          <path d="M3 9l9-7 9 7v11H3V9z" />
          <path d="M9 21V12h6v9" />
        </svg>
      </div>
      <div
        onMouseMove={(e) => movePiece(e)}
        onMouseDown={(e) => grabPiece(e)}
        onMouseUp={(e) => dropPiece(e)}
        id="battlemap"
        ref={battlemapRef}
      >
        {board}
      </div>
      <div className="text-container">
        <h1>Battle Status</h1>
      </div>
      <div className="text-container">
          <h2>Number of enemies: 3</h2>
        </div>
        <div className="text-container">
          <h2>Fighter health: 24</h2>
        </div>
        <div className="text-container">
          <h2>Barbarian health: 39</h2>
      </div>
    </>
  );
}