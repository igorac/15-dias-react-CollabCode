import React from 'react';
import Square from '../Square';
import './style.css';

const Board = () => {
  return (
    <div className="board">
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

export default Board;