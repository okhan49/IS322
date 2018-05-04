/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import WordList from '.';

describe('WordList component', () => {
    const guessedAnimals = [
        {
            id: 1,
            text: 'Zebra',
        },
    ];
    const component = shallow(<WordList guessedAnimals={guessedAnimals}/>);
    it('Should render successfully', () => {
        expect(component.exists()).toEqual(true);
    });

});