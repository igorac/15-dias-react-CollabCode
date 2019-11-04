import React from 'react';
import './style.css';

const NextPlayer = ({player}) => {
  return (
    <p className="next-player">Próximo Jogador: {player}</p>
  );
}

export default NextPlayer;