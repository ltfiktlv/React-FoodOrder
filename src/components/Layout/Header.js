import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Bahar's Place</h1>
        <div className={classes.buttons}>
          <HeaderCartButton onClick={props.onShow} />
        </div>
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a service table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
