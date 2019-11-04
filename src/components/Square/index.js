import React, { Component } from 'react';
import './style.css';


class Square extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: '',
    }

  }

  handleClick = () => {
    const newState = {};
    newState.content = (this.state.content === "X") ? 'O' : 'X';
    this.setState(newState);
  }

  render() {
    return (
      <button onClick={this.handleClick} className="square">{this.state.content}</button>
    );
  }

}

export default Square;