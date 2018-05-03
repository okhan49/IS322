/* global expect, it, describe */

import actions from '.';
import types from '../constants/';

describe('Actions', () => {
    const wordText = 'Zebra';

    it('Should create an action to add an animal', () => {
        const expectedAction = {
            type: types.SUBMIT_ANIMAL,
            id: 1,
            text: wordText,
        };

        expect(actions.submitAnimal(wordText)).toEqual(expectedAction);
    });
});