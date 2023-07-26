import React, { useEffect, useState } from "react";
import classes from "./MealsAvailable.module.css";
import MealCart from "../UI/MealCart";
import MealItem from "./MealItem/MealItem";

const MealsAvailable = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://food-order-app-4dedb-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedMeals = [];
      for (let key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: +data[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchData()
      .then(props.handleRefresh(false))
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, [props]);

  if (error) {
    return <p className={classes.mealError}>{error}</p>;
  }
  if (isLoading) {
    return <p className={classes.mealLoad}>Loading...</p>;
  }
  return (
    <MealCart className={classes.meals}>
      <ul>
        {meals.map((meal) => (
          <MealItem key={meal.name} meal={meal} id={meal.id} />
        ))}
      </ul>
    </MealCart>
  );
};

export default MealsAvailable;
