import React from 'react';
import PropTypes from 'prop-types';

const WordList = ({ guessedAnimals }) => {
    if(guessedAnimals.length != 0) {
        const compWord = guessedAnimals[guessedAnimals.length - 1].text;
        return (
            <span className="word-text">{compWord}</span>
        );
    }
    else {
        return <span></span>;
    }
};

WordList.propTypes = {
    guessedAnimals: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        },
    )).isRequired,
};
export default WordList;