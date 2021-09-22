import React from "react";
import styles from "./MealItem.Module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";
import {useContext} from "react";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)

  const price = `$${props.meal.price.toFixed(2)}`;
  
  const addToCartHandler = (amount) => {
    cartCtx.addItems({
      id: props.meal.id,
      name: props.meal.name,
      amount: amount,
      price : props.meal.price
    })
  }
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <p className={styles.description}>{props.meal.description}</p>
        <p className={styles.price}>{price}</p>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
