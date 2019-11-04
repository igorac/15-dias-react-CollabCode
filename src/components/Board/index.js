import React, {Component} from 'react';
import Square from '../Square';
import './style.css';

class Board extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }

  handleClick = () => {
    this.setState({
      content: (this.state.content === 'X') ? 'O' : 'X'
    })
  }

  renderSquares = () => {
    // return Array(9).fill(<Square 
    //                   onClickChange={this.handleClick}
    //                   content={this.state.content}  
    //                   key={this.props.index}/>);

    const squares = Array(9).fill();
    return squares.map( (square, index) => {
      return <Square onClickChange={this.handleClick} content={this.state.content} key={index} />
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