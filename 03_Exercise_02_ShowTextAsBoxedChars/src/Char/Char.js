import React from 'react';
import './Char.css';

const Char = (props) => {

    let character = props.character;
    let idx = props.idx;

    let style = 'char';
    if(character === ' ') style = 'blank';

    let style2 = 'ltilt';
    if(idx % 2 == 1) style2 = 'rtilt';

    return(
        <div 
            className={style + ' ' + style2}
            onClick={props.click}
            >
            {character}
        </div>
    )
};

export default Char;