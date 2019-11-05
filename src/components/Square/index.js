import React from 'react';
import './style.css';


// {content} => props.content
const Square = ({player, onClick}) => {
  return (
    <button onClick={onClick} className="square">
      {player}
    </button>
  );
}

export default Square;