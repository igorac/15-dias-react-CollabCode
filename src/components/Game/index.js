import React from 'react';
import Board from '../Board';
import './style.css';

const Game = () => {
  return (
    <>
      <Board qtd="9"/>
      <div className="next-player">Next player X</div>
    </>
  );
}

export default Game;