import React from 'react';

import './style.css';

const StartGame = ({onClick}) => {
    return (
        <div>
            <button className="start-game" onClick={onClick}>Começar o Game</button>
        </div>  
    );
}

export default StartGame;