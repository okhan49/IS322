import types from '../constants';
import Animals from '../animals';

export const initialState = {
    guessedAnimals:[],
    animalsBank: Animals,
    winner: "none",
};

export const reducer = (state = initialState, action) => {
    var win = state.winner;
    switch (action.type){
        case types.SUBMIT_ANIMAL:
            if(state.animalsBank[action.text.toLowerCase()[0]].length != 0){
                var animalsCopy = Object.assign(state.animalsBank);
                let currLet = action.text.toLowerCase()[0];
                if (state.guessedAnimals.length != 0){
                    let compLastLetter = state.guessedAnimals[state.guessedAnimals.length - 1].text.toLowerCase().substr(state.guessedAnimals[state.guessedAnimals.length - 1].text.length -1);
                    if(compLastLetter != currLet){
                        console.log("You Must Enter a word that begins with '" + compLastLetter.toUpperCase() + "'");
                        win = "Computer";
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
                        win = "Player";
                    }
                    return {
                        ...state,
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
                    };
                }
                else {
                    console.log("That's not a valid animal");
                    win = "Computer";
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
                    console.log("You already guessed that animal");
                    win = "Computer";
                }
                else {
                    console.log("That's not a valid animal");
                    win = "Computer";
                }
            }
            return {
                ...state,
                guessedAnimals:[
                    ...state.guessedAnimals,
                    {
                        id: action.id,
                        text: action.text,
                    },
                ],
                animalsBank: state.animalsBank,
                winner: win,
            };
        default:
            return state;
    }
};
export default reducer;