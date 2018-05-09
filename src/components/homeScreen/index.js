import React from 'react';
import PropTypes from 'prop-types';

const HomeScreen = ({playGame, highscore}) => {
    return (
        <div id="container">
            <span className="game-title"><h3>Last Letter Game</h3></span>
            <span className="game-title"><h4>Animal Edition</h4></span>
            <span className="highDis">High Score: {highscore}</span>
            <form onSubmit={(event) => {
                event.preventDefault();
                playGame();
            }}>
                <button className="playGame">Play Game</button>
            </form>
        </div>
    );
};

HomeScreen.propTypes = {
    playGame: PropTypes.func.isRequired,
    highscore: PropTypes.number.isRequired,
};
export default HomeScreen;