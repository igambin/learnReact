import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES =  {
  Salad: .5,
  Cheese: .4,
  Bacon: .7,
  Meat: 1.3
}

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      Salad: 0,
      Bacon: 0,
      Cheese: 0,
      Meat: 0
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false
  };

  updatePurchaseState(updatedIngredients) {
    const sum = Object.keys(updatedIngredients)
      .map(ingKey => updatedIngredients[ingKey])
      .reduce((sum, el) => sum + el, 0);
    this.setState(
      {
        purchaseable: sum > 0
      }
    );
  };

  addIngredientHandler = (type) => {

    const updatedIngredients =  {
      ...this.state.ingredients
    };
    updatedIngredients[type]++;

    let total = this.state.totalPrice;
    total += INGREDIENT_PRICES[type];

    this.setState(
      { 
        ingredients: updatedIngredients ,
        totalPrice: total 
      }
    );
    
    this.updatePurchaseState(updatedIngredients)
  };

  removeIngredientHandler = (type) => {

    const updatedIngredients =  {
      ...this.state.ingredients
    };

    if(updatedIngredients[type] > 0) {
      updatedIngredients[type]--;

      let total = this.state.totalPrice;
      total -= INGREDIENT_PRICES[type];

      this.setState(
        { 
          ingredients: updatedIngredients ,
          totalPrice: total 
        }
      );
    }

    this.updatePurchaseState(updatedIngredients)
  };

  purchaseHandler = () => {
    this.setState(
      {
        purchasing: true
      }
    );
  };

  purchaseCancelHandler = () => {
    this.setState(
      {
        purchasing: false
      }
    );
  }

  purchaseContinueHandler = () => {
    alert('You continued to purchase your configured burger for ' + this.state.totalPrice.toFixed(2) + ' €!');
  }

  render() {
    const disabledInfo =  {
      ...this.state.ingredients
    };
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
          >
          <OrderSummary 
            price={this.state.totalPrice}
            ingredients={this.state.ingredients} 
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            />
        </Modal>
        <Burger
          ingredients={this.state.ingredients}
        />
        <BuildControls 
          price={this.state.totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchaseable={!this.state.purchaseable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  };
}

export default BurgerBuilder;