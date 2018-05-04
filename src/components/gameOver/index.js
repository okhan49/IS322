import React from 'react';
import PropTypes from 'prop-types';

const GameOver = ({ winner, playGame }) => {
    if (winner != 'You Win!'){
        return (<div>
            <span><h1>Game Over</h1></span>
            <span><h3>{winner}</h3></span>
            <form onSubmit={(event) => {
                event.preventDefault();
                playGame();
            }}>
                <button className="playGame">Retry</button>
            </form>
        </div>);
    }
    else {
        return (
            <div>
                <span><h1>Congratulations</h1></span>
                <span><h3>{winner}</h3></span>
                <form onSubmit={(event) => {
                        event.preventDefault();
                        playGame();
                    }}>
                    <button className="playGame">Retry</button>
                </form>
            </div>
        );
    }
};

GameOver.propTypes = {
    winner: PropTypes.string.isRequired,
    playGame: PropTypes.func.isRequired,
};
export default GameOver;