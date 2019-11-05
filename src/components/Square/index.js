import React from 'react';
import './style.css';


// {player} => props.player
const Square = ({player, onClick}) => {
  return (
    <button onClick={onClick} className="square">
      {player}
    </button>
  );
}

export default Square;