import React, { Component } from 'react';
import NextPlayer from '../NextPlayer';
import Board from '../Board';

import './style.css';

class GameWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player: ''
    }
  }

  handleClick = () => {
    this.setState({
      player: (this.state.player === 'X') ? 'O' : 'X'
    })
  }

  // o onClick do Board está utilizando o onClick do Square, então
  // ao clicar no square, ele vai fazer o fluxo de dentro para fora
  // do component filho (square) -> (board) -> (GameWrapper)
  render() {
    return (
      <main className="game-wrapper">
        <NextPlayer player={this.state.player} />
        <Board onClick={this.handleClick} />
      </main>
    );
  }

}

export default GameWrapper;