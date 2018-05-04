import types from '../constants';
import Animals from '../animals';

export const initialState = {
    guessedAnimals:[],
    animalsBank: Animals,
};

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case types.SUBMIT_ANIMAL:
            if(state.animalsBank[action.text.toLowerCase()[0]].length != 0){
                var animalsCopy = Object.assign(state.animalsBank);
                let currLet = action.text.toLowerCase()[0];
                let index = animalsCopy[currLet].indexOf(action.text.toLowerCase());
                if(index !== -1){
                    animalsCopy[currLet].splice(index, 1);
                }
                else {
                    console.log("That's not a valid animal");
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
                    animalsBank: animalsCopy,
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
                    console.log("You already guessed that animal");
                }
                else {
                    console.log("That's not a valid animal");
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
                };
            }
        default:
            return state;
    }
};
export default reducer;