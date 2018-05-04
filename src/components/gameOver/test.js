/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import GameOver from '.';

describe('GameOver component', () => {
    const winner = "Computer";
    const component = shallow(<GameOver={winner}/>);
    it('Should render successfully', () => {
        expect(component.exists()).toEqual(true);
    });

});