import React from 'react';
import PropTypes from 'prop-types';

const WordList = ({ guessedAnimals }) => {
    const wordItems  = guessedAnimals.map(word => (
        <li key={word.id}>
            <span className="word-text">{word.text}</span>
        </li>
    ));
    return (
        <ul>
            {wordItems}
        </ul>
    );
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