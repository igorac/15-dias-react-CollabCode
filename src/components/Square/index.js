import React from 'react';
import './style.css';


// {content} => props.content
const Square = ({content, onClick}) => {
  return (
    <button onClick={onClick} className="square">{content}</button>
  );
}

export default Square;