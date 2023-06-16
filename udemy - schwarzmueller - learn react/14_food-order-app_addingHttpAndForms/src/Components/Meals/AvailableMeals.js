import React from "react";
import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";

const AvailableMeals = (props) => {
  let content = <p>data not available</p>;

  if (props.meals.length > 0) {
    const meallist = props.meals.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        desc={meal.description}
        price={meal.price}
      />
    ));
    content = <ul>{meallist}</ul>;
  }

  if (props.error) {
    content = (
      <p className={classes.error}>
        Failed to load meals, please contact the ReactMeals-Service. Maybe just
        &nbsp;
        <button className={classes.tryagain} onClick={props.onFetch}>
          try again...
        </button>
        {props.error && <p>{props.error}</p>}
      </p>
    );
  }

  if (props.loading) {
    content = <p>'Loading Meals ...'</p>;
  }

  return (
    <section className={classes.meals}>
      <Card>{content}</Card>
    </section>
  );
};

export default AvailableMeals;
