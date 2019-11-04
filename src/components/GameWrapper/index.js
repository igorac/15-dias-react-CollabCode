import React, { Component } from 'react';
import NextPlayer from '../NextPlayer';
import Board from '../Board';
import Historico from '../Historico';

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

  // O onClick do Board está utilizando o onClick do Square, então
  // ao clicar no square, ele vai fazer o fluxo de dentro para fora
  // do component filho (square) -> (board) -> (GameWrapper)
  render() {
    return (
      <main className="game-wrapper">
        <NextPlayer player={this.state.player} />
        <div className="board-historico">
          <Board onClick={this.handleClick} player={this.state.player}/>
          <Historico />
        </div>
      </main>
    );
  }

}

export default GameWrapper;