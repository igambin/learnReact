import React from 'react';
import { render } from 'react-dom';
import './Validation.css';

const Validation = (props) => {
    const isValid = props.isValid;

    let output = 'Text ' + ( isValid === true ? 'long enough' : 'too short');
    let validationStyle = { color: isValid ? 'green' : 'red' };

    return(
        <div className="validation" style={validationStyle}>
            {output}
        </div>
    )
};

export default Validation;