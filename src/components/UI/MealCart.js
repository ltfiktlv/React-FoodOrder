import React from "react";
import classes from "./MealCart.module.css";
const MealCart = (props) => {
  return (
    <section className={`${classes.cart} ${props.className}`}>
      {props.children}
    </section>
  );
};

export default MealCart;
