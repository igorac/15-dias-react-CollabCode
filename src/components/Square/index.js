import React from 'react';
import './style.css';


// function handleClick(e) {
//   console.log('1');
// }

const handleClick = (text) => () => console.log(text)

const Square = () => <button onClick={handleClick('Teste')} className="square">X</button>


export default Square;