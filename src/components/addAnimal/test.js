/* global expect, it, describe, jest*/

import React from 'react';
import { shallow } from 'enzyme';
import AddAnimal from '.';

describe('AddAnimal component', () => {
    it('Should render successfully', () => {
        const component = shallow(<AddAnimal />);
        expect(component.exists()).toEqual(true);
    });
    it('Should have one input', () => {
        const component = shallow(<AddAnimal />);
        expect(component.find('.word-input').length).toEqual(1);
    });
    describe('Add Animal button', () => {
        it('Should exist', () => {
            const component = shallow(<AddAnimal />);
            expect(component.find('.word-submit').length).toEqual(1);
        });
        it('Should call the submitAnimal function when clicked', () => {
            const submitMock = jest.fn();
            const component = mount(<AddAnimal submitAnimal={submitMock} />);

            expect(submitMock.mock.calls.length).toEqual(0);
            component.find('form').simulate('submit');
            expect(submitMock.mock.calls.length).toEqual(1);
        });
    });
});