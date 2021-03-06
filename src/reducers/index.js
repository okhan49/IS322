import types from '../constants';
import Animals from '../animals';
const permAnimals = Animals;
export const initialState = {
    screen: "home",
    guessedAnimals:[],
    animalsBank: Object.assign(Animals),
    winner: "none",
    score: 0,
    highscore: 0,
};

export const reducer = (state = initialState, action) => {
    var win = state.winner;
    switch (action.type){
        case types.SUBMIT_ANIMAL:
            var currscreen = "playgame";
            if(state.animalsBank[action.text.toLowerCase()[0]].length != 0){
                var animalsCopy = Object.assign(state.animalsBank);
                let currLet = action.text.toLowerCase()[0];
                if (state.guessedAnimals.length != 0){
                    let compLastLetter = state.guessedAnimals[state.guessedAnimals.length - 1].text.toLowerCase().substr(state.guessedAnimals[state.guessedAnimals.length - 1].text.length -1);
                    if(compLastLetter != currLet){
                        console.log("You Must Enter a word that begins with '" + compLastLetter.toUpperCase() + "'");
                        win =  "Oops, you needed to enter a word that began with '" + compLastLetter.toUpperCase() + "'";
                        currscreen = "gameover";
                    }
                }
                let index = animalsCopy[currLet].indexOf(action.text.toLowerCase());
                if(index !== -1){
                    animalsCopy[currLet].splice(index, 1);
                    let lastLetter = action.text.toLowerCase().substr(action.text.length - 1);
                    if (animalsCopy[lastLetter].length != 0){
                        var randWord = animalsCopy[lastLetter][Math.floor(Math.random() * animalsCopy[lastLetter].length)];
                        let idx = animalsCopy[lastLetter].indexOf(randWord);
                        animalsCopy[lastLetter].splice(idx, 1);
                    }
                    else {
                        console.log("You Win");
                        win = "You Win!";
                        currscreen = "gameover";
                        if(state.score + 1 > state.highscore){
                            var hs = state.score + 1;
                        }
                        else {
                            hs = state.highscore;
                        }
                        return {
                            ...state,
                            screen: currscreen,
                            guessedAnimals:[
                                ...state.guessedAnimals,
                                {
                                    id: action.id,
                                    text: action.text,
                                },
                            ],
                            animalsBank: animalsCopy,
                            winner: win,
                            score: state.score + 1,
                            highscore: hs,
                        };
                    }
                    if(state.score + 1 > state.highscore){
                        var hs = state.score + 1;
                    }
                    else {
                        hs = state.highscore;
                    }
                    return {
                        ...state,
                        screen: currscreen,
                        guessedAnimals:[
                            ...state.guessedAnimals,
                            {
                                id: action.id,
                                text: action.text,
                            },
                            {
                                id: action.id + 1,
                                text: randWord.charAt(0).toUpperCase() + randWord.slice(1),
                            },
                        ],
                        animalsBank: animalsCopy,
                        winner: win,
                        score: state.score + 1,
                        highscore: hs,
                    };
                }
                else {
                    var alreadyGuessed = false;
                    for (var i = 0; i < state.guessedAnimals.length; i++){
                        if (state.guessedAnimals[i].text.toLowerCase() == action.text.toLowerCase()){
                            alreadyGuessed = true;
                            break;
                        }
                    }
                    if (alreadyGuessed){
                        console.log("Oops, that animal was already guessed.");
                        win = "Oops, that animal was already guessed.";
                        currscreen = "gameover";
                    }
                    else {
                        console.log("Oops, that wasn't a valid animal.");
                        win = "Oops, that wasn't a valid animal.";
                        currscreen = "gameover";
                    }
                }
            }
            else {
                var alreadyGuessed = false;
                for (var i = 0; i < state.guessedAnimals.length; i++){
                    if (state.guessedAnimals[i].text.toLowerCase() == action.text.toLowerCase()){
                        alreadyGuessed = true;
                        break;
                    }
                }
                if (alreadyGuessed){
                    console.log("Oops, that animal was already guessed.");
                    win = "Oops, that animal was already guessed.";
                    currscreen = "gameover";
                }
                else {
                    console.log("Oops, that wasn't a valid animal.");
                    win = "Oops, that wasn't a valid animal.";
                    currscreen = "gameover";
                }
            }
            if(state.score > state.highscore){
                var hs = state.score;
            }
            else {
                hs = state.highscore;
            }
            return {
                ...state,
                screen: currscreen,
                guessedAnimals:[
                    ...state.guessedAnimals,
                    {
                        id: action.id,
                        text: action.text,
                    },
                ],
                animalsBank: state.animalsBank,
                winner: win,
                score: state.score,
                highscore: state.highscore,
            };
        case types.PLAY_GAME:
            return {
                screen: "playgame",
                guessedAnimals:[],
                animalsBank: Object.assign(Animals),
                winner: "none",
                score: 0,
                highscore: state.highscore
            };
        case types.GO_HOME:
            return {
                screen: "home",
                guessedAnimals:[],
                animalsBank: Object.assign(Animals),
                winner: "none",
                score: 0,
                highscore: state.highscore
            };
        case types.QUIT:
            return {
                screen: "gameover",
                guessedAnimals: state.guessedAnimals,
                animalsBank: state.animalsBank,
                winner: "Looks like you gave up.",
                score: state.score,
                highscore: state.highscore
            };
        default:
            return state;
    }
};
export default reducer;