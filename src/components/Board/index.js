import React from 'react';
import Square from '../Square';
import './style.css';


const squareCollabs = qtd => {
  let max = qtd;
  const squares = [];

  while(max--) {
    squares.push(<Square  key={max}/>);
  }

  return squares;
}

const Board = ({qtd}) => {
  return (
    <article className="board">
      {squareCollabs(qtd)}
    </article>
  );
}

export default Board;