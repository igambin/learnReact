import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
  render() {

    const createSimple = (name) => {
      if (name === null) return null;
      return <div className={classes[name]}></div>;
    };

    const createTop = () => (
      <div className={classes.BreadTop}>
        <div className={classes.Seeds1}></div>
        <div className={classes.Seeds2}></div>
      </div>
    );

    return this.props.type === 'BreadTop' ? createTop() : createSimple(this.props.type);
  };

};

BurgerIngredient.propTypes =  {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
