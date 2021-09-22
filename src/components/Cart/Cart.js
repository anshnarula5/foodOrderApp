import React from 'react';
import Modal from '../UI/Modal';
import styles from "./Cart.Module.css"

const Cart = (props) => {
    const cartItems = <ul className = {styles["cart-items"]}>{[{id: "m1", price: 69, name: "Mango", amount: 3}].map(item => (
        <li>{item.name}</li>
    ))}</ul>


    return (
        <Modal onClick = {props.onCancel}>
            <div>
                {cartItems}
                <div className = {styles.total}>
                    <span>Total</span>
                    <span>313</span>
                </div>
                <div className = {styles.actions}>
                    <button className = {styles["actions--alt"]} onClick = {props.onCancel}>Cancel</button>
                    <button className = {styles.button}>Order</button>
                </div>
            </div>
        </Modal>
    );
}

export default Cart;
