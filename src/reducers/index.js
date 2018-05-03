import types from '../constants';

export const initialState = {
    guessedAnimals:[],
};

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case types.SUBMIT_ANIMAL:
            return {
                ...state,
                guessedAnimals:[
                    ...state.guessedAnimals,
                    {
                        id: action.id,
                        text: action.text,
                    },
                ],
            };
        default:
            return state;
    }
};
export default reducer;