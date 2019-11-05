import React, { Component } from 'react';
import NextPlayer from '../NextPlayer';
import Board from '../Board';
import Historico from '../Historico';

import './style.css';


class GameWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player: 'X',
      squares: Array(9).fill("")
    }
  }

  handleClick = (index) => {
    const { player, squares } = this.state;
    
    !squares[index] && (squares[index] = player);
    

    this.setState({
      player: (player === 'X') ? 'O' : 'X',
      squares: squares
    })
  }

  // O onClick do Board está utilizando o onClick do Square, então
  // ao clicar no square, ele vai fazer o fluxo de dentro para fora
  // do component filho (square) -> (board) -> (GameWrapper)
  render() {
    const { player, squares } = this.state;
    return (
      <main className="game-wrapper">
        <NextPlayer player={player} />
        <Board onClick={this.handleClick} squares={squares}/>
        <Historico />
      </main>
    );
  }

}

export default GameWrapper;