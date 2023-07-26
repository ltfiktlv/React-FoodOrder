import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [buttonHighlight, setButtonHighlight] = useState(false);
  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  },0);

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setButtonHighlight(true);

    const timer = setTimeout(() => setButtonHighlight(false), 300);
    return () =>{
      clearTimeout(timer)
    }
  }, [cartCtx.items]);
  const btnClasses = `${classes.button} ${buttonHighlight ? classes.bump : ""}`;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      {/* icon */}
      <span className={classes.icon}>
        <CartIcon />
      </span>
      {/* text */}
      <span>Your Cart</span>
      {/* badge */}
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
