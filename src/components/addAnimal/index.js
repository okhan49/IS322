import React from 'react';
import PropTypes from 'prop-types';

const AddAnimal = ({submitAnimal}) => {
    let input;

    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
                submitAnimal(input.value);
                input.value = '';
            }}>
                <input className="word-input" ref={(element) => {
                    input = element;
                }}/>
                <button type="submit" className="word-submit">Submit</button>
            </form>
        </div>
    );
};

AddAnimal.propTypes = {
    submitAnimal: PropTypes.func.isRequired,
};

export default AddAnimal;