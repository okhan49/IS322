import types from '../constants/';
let wordID = 0;

const nextID = () => {
    wordID +=2;
    return wordID;
};

const actions = {
    submitAnimal(text){
        return {
            type: types.SUBMIT_ANIMAL,
            id: nextID(),
            text,
        };
    },
    playGame(){
        return {
            type: types.PLAY_GAME,
        }
    },
};

export default actions;