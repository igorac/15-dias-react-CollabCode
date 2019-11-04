import React, {Component} from 'react';
import Square from '../Square';
import './style.css';

class Board extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      content: 'X'
    }
  }

  handleClick = () => {
    this.setState({
      content: (this.state.content === 'X') ? 'O' : 'X'
    })
  }

  squareCollabs(qtd) {
    let max = qtd;
    const squares = [];

    while(max--) {
      squares.push(<Square 
                  onClickChange={this.handleClick}
                  content={this.state.content}  
                  key={max}/>);
    }
  
    return squares;
  }

  render() {
    const qtd = this.props.qtd;

    return (
      <article className="board">
        {this.squareCollabs(qtd)}
      </article>
    );
  }

}

export default Board;