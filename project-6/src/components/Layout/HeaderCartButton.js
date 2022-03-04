import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [buttonHighlighted, setButtonHighlighted] = useState(false);
  const cartContext = useContext(CartContext);
  const { items } = cartContext;

  const cartItemsCount = items.reduce((currentNo, item) => {
    return currentNo + item.amount;
  }, 0);

  const buttonClasses = `${classes.button} ${
    buttonHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) return;
    setButtonHighlighted(true);
    const timer = setTimeout(() => {
      setButtonHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemsCount}</span>
    </button>
  );
};

export default HeaderCartButton;
