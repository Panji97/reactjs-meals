import { useContext } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/CartContext";

const MealItem = (props) => {
  const CartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCarthandler = (amount) => {
    CartCtx.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        {/* i'm improve this one */}
        <MealItemForm id={props.id} onAddToCart={addToCarthandler} />
      </div>
    </li>
  );
};

export default MealItem;
