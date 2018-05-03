/* global expect, it, describe, jest, beforeEach*/

import React from 'react';
import { shallow, mount } from 'enzyme';
import AddAnimal from '.';

describe('AddAnimal component', () => {
    let component;
    const submitMock = jest.fn();

    beforeEach(() => {
        component = shallow(
            <AddAnimal submitAnimal={submitMock}/>,
        );
    });

    it('Should render successfully', () => {
        expect(component.exists()).toEqual(true);
    });
    it('Should have one input', () => {
        expect(component.find('.word-input').length).toEqual(1);
    });
    describe('Add Animal button', () => {
        it('Should exist', () => {
            expect(component.find('.word-submit').length).toEqual(1);
        });
        it('Should call the submitAnimal function when clicked', () => {
            const component = mount(<AddAnimal submitAnimal={submitMock} />);

            expect(submitMock.mock.calls.length).toEqual(0);
            component.find('form').simulate('submit');
            expect(submitMock.mock.calls.length).toEqual(1);
        });
    });
});