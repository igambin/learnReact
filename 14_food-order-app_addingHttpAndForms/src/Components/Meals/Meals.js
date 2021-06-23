import React, { useEffect, useState, Fragment } from "react";
import useHttp from "../../hooks/use-http";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
  const [meals, setMeals] = useState([]);

  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    const transformMeals = (mealsData) => {
      const loadedMeals = [];
      for (const mealKey in mealsData) {
        loadedMeals.push({
          id: mealKey,
          name: mealsData[mealKey].name,
          description: mealsData[mealKey].description,
          price: mealsData[mealKey].price,
        });
      }
      setMeals(loadedMeals);
    };

    fetchMeals(
      {
        url: "https://myreactlearning-8430a-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
      },
      transformMeals
    );
  }, [fetchMeals]);

  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals
        meals={meals}
        loading={isLoading}
        error={error}
        onFetch={fetchMeals}
      />
    </Fragment>
  );
};

export default Meals;
