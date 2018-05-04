/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import GameOver from '.';

describe('GameOver component', () => {
    const winner = "You Win!";
    const submitMock = jest.fn();
    const component = shallow(<GameOver winner={winner} playGame={submitMock}/>);
    it('Should render successfully', () => {
        expect(component.exists()).toEqual(true);
    });

});