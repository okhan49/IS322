import types from '../constants/';
let wordID = 0;

const nextID = () => {
    wordID +=1;
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
};

export default actions;