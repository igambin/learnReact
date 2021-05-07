import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    let paragraph1 = props.p1;
    let paragraph2 = props.p2;

    return (
        <div className="UserOutput">
            <p>Paragraph1: {paragraph1}</p>
            <p>Paragraph2: {paragraph2}</p>
        </div>
    )

};

export default userOutput;