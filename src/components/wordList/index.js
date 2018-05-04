import React from 'react';
import PropTypes from 'prop-types';

const WordList = ({ guessedAnimals, goHome, score, quit }) => {
    if(guessedAnimals.length != 0) {
        const compWord = guessedAnimals[guessedAnimals.length - 1].text;
        return (
            <div>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    goHome();
                }}>
                    <span><button className="goHome"><i className="fa fa-home fa-3x"></i></button></span>
                </form>
                <span>Score: {score}</span>
                <br/>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    quit();
                }}>
                    <button className="quit">Give Up?</button>
                </form>
                <br/>
                <span className="word-text">{compWord}</span>
            </div>
        );
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
                <span>Score: {score}</span>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    quit();
                }}>
                    <button className="quit">Give Up?</button>
                </form>
            </div>
        );
    }
};

WordList.propTypes = {
    guessedAnimals: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        },
    )).isRequired,
    goHome: PropTypes.func.isRequired,
    score: PropTypes.number.isRequired,
    quit: PropTypes.func.isRequired,
};
export default WordList;