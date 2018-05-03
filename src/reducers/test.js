/* global expect, it, describe */

import {reducer, initialState} from '.';
import types from '../constants';

describe('Reducer', () => {
    const wordText = 'Zebra';

    it('Should return the initial state when no action passed', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    describe('Submit Animal', () => {
        it('Should return the correct state', () => {
            const action = {
                type: types.SUBMIT_ANIMAL,
                id: 1,
                text: wordText,
            };
            const expectedState = {
                guessedAnimals: [
                    {
                        id: 1,
                        text: wordText,
                    },
                ],
            };

            expect(reducer(undefined, action)).toEqual(expectedState);
        });
    });
});
