import React from 'react';
import './style.css';


function handleClick(e) {
  console.log(e);
}

const Square = () => <button onClick={handleClick} className="square">X</button>


export default Square;