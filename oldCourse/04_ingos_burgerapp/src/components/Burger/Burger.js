import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

  let transformedIngredients = 
    Object.keys(props.ingredients)
          .map(iKey => {
            return [...Array(props.ingredients[iKey])]
              .map((_, i) => {
                return <BurgerIngredient key={iKey + i} type={iKey} />;
              })
          })
          .reduce((arr, el) => arr.concat(el), []);
 
  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
          
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="BreadTop" />
      {transformedIngredients}
      <BurgerIngredient type="BreadBottom" />
    </div>
  );
};

export default burger;