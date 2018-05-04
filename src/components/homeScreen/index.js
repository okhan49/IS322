import React from 'react';
import PropTypes from 'prop-types';

const HomeScreen = ({playGame}) => {
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            playGame();
        }}>
            <button className="playGame">Play Game</button>
        </form>
    );
};

HomeScreen.propTypes = {
    playGame: PropTypes.func.isRequired,
};
export default HomeScreen;