import React from 'react';
import PropTypes from 'prop-types';

const GameOver = ({ winner }) => {
    return (
            <h1>{winner}</h1>
    );
};

GameOver.propTypes = {
    winner: PropTypes.string.isRequired,
};
export default GameOver;