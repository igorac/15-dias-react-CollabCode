import React, {Component} from 'react';
import Square from '../Square';
import './style.css';

class Board extends Component {

  renderSquares = () => {
    const squares = Array(9).fill();
    return squares.map( (square, index) => {

      return <Square 
              onClick={() => this.props.onClick(index)}
              player={this.props.squares[index]} 
              key={index} />
    
    });
  }

  render() {
    return (
      <article className="board">
        {this.renderSquares()}
      </article>
    );
  }

}

export default Board;