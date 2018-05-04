import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddAnimal from './components/addAnimal/';
import WordList from './components/wordList';
import actions from './actions/';
import GameOver from "./components/gameOver";
import HomeScreen from "./components/homeScreen";

export const App = ({ screen, playGame, submitAnimal, guessedAnimals, winner, score, highscore, goHome, quit }) => {
    if(screen == "home"){
        return <HomeScreen playGame={playGame} highscore={highscore}/>;
    }
    else if(screen == "playgame"){
        return [<WordList key='2' score={score} quit={quit} goHome={goHome} guessedAnimals={guessedAnimals}/>, <AddAnimal submitAnimal={submitAnimal} key='1'/>];
    }
    else if(screen == "gameover"){
        return <GameOver winner={winner} score={score} playGame={playGame} goHome={goHome} highscore={highscore}/>;
    }
};

App.propTypes = {
    submitAnimal: PropTypes.func.isRequired,
    guessedAnimals: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
    },
    )).isRequired,
    winner: PropTypes.string.isRequired,
    highscore: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    screen: PropTypes.string.isRequired,
    playGame: PropTypes.func.isRequired,
    goHome: PropTypes.func.isRequired,
    quit: PropTypes.func.isRequired,
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
    },
    goHome: () => {
        dispatch(actions.goHome());
    },
    quit: () => {
        dispatch(actions.quit());
    }

});
export default connect(mapStateToProps, mapDispatchToProps)(App);