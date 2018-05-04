import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddAnimal from './components/addAnimal/';
import WordList from './components/wordList';
import actions from './actions/';
import GameOver from "./components/gameOver";
import HomeScreen from "./components/homeScreen";

export const App = ({ submitAnimal, guessedAnimals, winner }) => (
    <div>
        <h1>Last Letter Game - Animal Edition</h1>
        <HomeScreen/>
        <AddAnimal submitAnimal={submitAnimal} />
        <WordList guessedAnimals={guessedAnimals}/>
        <GameOver winner={winner}/>
    </div>
);
App.propTypes = {
    submitAnimal: PropTypes.func.isRequired,
    guessedAnimals: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
    },
    )).isRequired,
    winner: PropTypes.string.isRequired
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