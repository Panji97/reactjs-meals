import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartBtn.module.css";
import CartContex from "../../Store/CartContext";

const HeaderCartBtn = (props) => {
  const [btnIsHighlighted, setBtnIsHighlight] = useState(false);
  const cartCtx = useContext(CartContex);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) return;

    setBtnIsHighlight(true);

    const timer = setTimeout(() => {
      setBtnIsHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartBtn;
