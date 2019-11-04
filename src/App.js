import React from 'react';
import NextPlayer from './components/NextPlayer';
import Board from './components/Board';
import GameWrapper from './components/GameWrapper';


function App() {
  return (
    <GameWrapper>
      <NextPlayer />
      <Board qtd="9" />
    </GameWrapper>
  );
}

export default App;
