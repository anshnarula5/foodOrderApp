import React from 'react';
import {useReducer} from 'react';

import CartContext from './cart-context';

const defaultState = {
    items: [],
    totalAmount : 0
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        return {
            items: updatedItems,
            totalAmount : updatedTotalAmount
        }
    }
    if (action.type === "REMOVE") {
        
    }
    return defaultState
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState)

    const addHandler = (item) => {
        dispatchCartAction({type : "ADD", item})
    }
    const removeHandler = (id) => {
        dispatchCartAction({type : "REMOVE", id})
    }

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItems: addHandler,
        removeItem : removeHandler
    }
    return (
        <CartContext.Provider value = {cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
