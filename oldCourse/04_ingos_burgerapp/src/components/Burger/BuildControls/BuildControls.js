import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'Salad' },
    { label: 'Bacon', type: 'Bacon' },
    { label: 'Cheese', type: 'Cheese' },
    { label: 'Meat', type: 'Meat' },
]

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)} €</strong></p>
        {controls.map(ingredient => (
            <BuildControl 
                key={ingredient.label}
                label={ingredient.label}
                added={() => props.ingredientAdded(ingredient.type)}
                removed={() => props.ingredientRemoved(ingredient.type)}
                disabled={props.disabled[ingredient.type]}
            />
        ))}
        <button
            disabled={props.purchaseable}
            className={classes.OrderButton}
            onClick={props.ordered}>ORDER NOW</button>     
    </div>
);

export default BuildControls;