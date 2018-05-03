import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddAnimal from './components/addAnimal/';
import WordList from './components/wordList';
import actions from './actions/';

export const App = ({ submitAnimal, guessedAnimals }) => (
    <div>
        <h1>Last Letter Game - Animal Edition</h1>
        <AddAnimal submitAnimal={submitAnimal} />
        <WordList guessedAnimals={guessedAnimals}/>
    </div>
);
App.propTypes = {
    submitAnimal: PropTypes.func.isRequired,
    guessedAnimals: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
    },
    )).isRequired,
};

const mapStateToProps = state => state.lastLetterGameApp;

const mapDispatchToProps = dispatch => ({
    submitAnimal: (text) => {
        if(text){
            dispatch(actions.submitAnimal(text));
        }
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);