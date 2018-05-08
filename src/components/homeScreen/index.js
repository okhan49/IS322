import React from 'react';
import PropTypes from 'prop-types';

const HomeScreen = ({playGame, highscore}) => {
    return (
        <div id="container">
            <span class="highDis">High Score: {highscore}</span>
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