import React from 'react';
import './Battlemap.css';

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