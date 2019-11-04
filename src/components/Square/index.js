import React from 'react';
import './style.css';


const Square = (props) => {
  return (
    <button onClick={props.onClickChange} className="square">{props.content}</button>
  );
}

export default Square;