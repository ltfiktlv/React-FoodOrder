import React, { Fragment, useState } from "react";
import MealsAvailable from "./MealsAvailable";
import MealsSummary from "./MealsSummary";
import NewMealItem from "./NewMealItem";
const Meals = () => {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = (blean) => {
    setRefresh(blean);
  };

  return (
    <Fragment>
      <MealsSummary />
      <MealsAvailable refresh={refresh} handleRefresh={handleRefresh} />
      <NewMealItem handleRefresh={handleRefresh} />
    </Fragment>
  );
};

export default Meals;
