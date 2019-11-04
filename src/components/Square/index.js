import React, { Component } from 'react';
import './style.css';


class Square extends Component {

  constructor(props) {
    super(props);
    this.state = {
      simbolo: '',
      isNextX: true,
    }

  }

  handleClick = () => {
    this.setState({
      simbolo: (this.state.isNextX) ? 'X' : 'O',
      isNextX: !this.state.isNextX
    })
  }

  render() {
    return (
      <button onClick={this.handleClick} className="square">{this.state.simbolo}</button>
    );
  }

}

export default Square;