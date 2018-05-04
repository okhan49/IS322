/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import HomeScreen from '.';

describe('HomeScreen component', () => {
    const component = shallow(<HomeScreen/>);
    it('Should render successfully', () => {
        expect(component.exists()).toEqual(true);
    });
    describe('Play Game button', () => {
        it('Should exist', () => {
            expect(component.find('.playGame').length).toEqual(1);
        });
    });
});