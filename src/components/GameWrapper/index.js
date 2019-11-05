import React, { Component } from 'react';
import NextPlayer from '../NextPlayer';
import Board from '../Board';
import Historico from '../Historico';
import StartGame from '../StartGame';

import './style.css';


class GameWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player: 'X',
      squares: Array(9).fill(""),
      // historico: []
    }
  }

  handleClick = (index) => {
    const { player, squares } = this.state;

    // Entra nessa condição, caso o square naquele indice esteja vazio.
    if (!squares[index]) {
      squares[index] = player;
      this.setState({
        player: (player === 'X') ? 'O' : 'X',
        squares: squares,
        // historico: [
        //   {playerHist: player}
        // ]
      })
    }
  }

  estadoInicial = () => {
    this.setState({
      player: 'X',
      squares: Array(9).fill("")
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
        <Board onClick={this.handleClick} squares={squares} />
        <StartGame onClick={this.estadoInicial} />
        <Historico historico={this.state.historico}/>
      </main>
    );
  }

}

export default GameWrapper;