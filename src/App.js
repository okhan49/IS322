import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddAnimal from './components/addAnimal/';
import WordList from './components/wordList';
import actions from './actions/';
import GameOver from "./components/gameOver";
import HomeScreen from "./components/homeScreen";

export const App = ({ screen, playGame, submitAnimal, guessedAnimals, winner }) => {
    if(screen == "home"){
        return <HomeScreen playGame={playGame}/>;
    }
    else if(screen == "playgame"){
        return [<AddAnimal submitAnimal={submitAnimal} key='1'/>, <WordList key='2' guessedAnimals={guessedAnimals}/>];
    }
    else if(screen == "gameover"){
        return <GameOver winner={winner}/>;
    }
};

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
    playGame:() => {
        dispatch(actions.playGame());
    }

});
export default connect(mapStateToProps, mapDispatchToProps)(App);