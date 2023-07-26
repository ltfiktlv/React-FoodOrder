import React, { useState } from "react";
import MealCart from "../UI/MealCart";
import classes from "./NewMealItem.module.css";
import classes2 from "../UI/Input.module.css";
const NewMealItem = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const priceHandler = (event) => {
    setPrice(event.target.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const data = {
      name,
      description,
      price: +price,
    };
    let validateData =
      name.trim().length > 0 &&
      description.trim().length > 0 &&
      price.trim().length > 0;
    if (validateData) {
      const response = await fetch(
        "https://food-order-app-4dedb-default-rtdb.firebaseio.com/meals.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const see = await response.json();
      console.log(see);
      setName("");
      setDescription("");
      setPrice("");
      return props.handleRefresh(true);
    }
    props.handleRefresh(false);
  };
  return (
    <MealCart className={classes.new + " " + classes2.input}>
      <form onSubmit={submitHandler} className={classes.separate}>
        <div>
          <label htmlFor="name">Name </label>
          <input id="name" type="text" value={name} onChange={nameHandler} />
        </div>
        <div>
          <label htmlFor="description">Description </label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={descriptionHandler}
          />
        </div>
        <div>
          <label htmlFor="price">Price </label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={priceHandler}
          />
        </div>

        <button type="submit" className={classes.btn}>
          Add Meal
        </button>
      </form>
    </MealCart>
  );
};

export default NewMealItem;
