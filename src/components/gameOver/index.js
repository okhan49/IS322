import React from 'react';
import PropTypes from 'prop-types';

const GameOver = ({ winner, playGame, highscore, goHome, score }) => {
    if (winner != 'You Win!'){
        return (
            <div>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    goHome();
                }}>
                    <span><button className="goHome"><i className="fa fa-home fa-3x"></i></button></span>
                </form>
                <span>High Score: {highscore}</span>
                <span><h1>Game Over</h1></span>
                <span><h3>You Lose!</h3></span>
                <span><h3>{winner}</h3></span>
                <span><h4>Your score was: {score}</h4></span>
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
                <form onSubmit={(event) => {
                    event.preventDefault();
                    goHome();
                }}>
                    <span><button className="goHome"><i className="fa fa-home fa-3x"></i></button></span>
                </form>
                <span>High Score: {highscore}</span>
                <span><h1>Congratulations</h1></span>
                <span><h3>{winner}</h3></span>
                <span><h4>Your score was: {score}</h4></span>
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
    goHome: PropTypes.func.isRequired,
    score: PropTypes.number.isRequired,
    highscore: PropTypes.number.isRequired,
};
export default GameOver;