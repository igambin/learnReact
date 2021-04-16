import React from 'react';
import classes from './burgerIngredient.css';

const burgerIngredient = (props) => {
    let ingredient = null;

    const createSimple = (name) => {
        if(name === null) return null;
        return <div className={name}></div>;
    };
    
    const createTop = () => (
        <div className = {classes.BreadTop}>
            <div className ={classes.Seeds1}></div>
            <div className ={classes.Seeds2}></div>
        </div>
    );

    return props.type === 'BreadTop' ? createTop() : createSimple(props.type);

};

export default burgerIngredient;
