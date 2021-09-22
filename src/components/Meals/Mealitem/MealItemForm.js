import React from 'react';
import styles from "./MealItemForm.Module.css"
import Input from '../../UI/Input';
import {useRef} from 'react';
import {useState} from 'react';

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef()
    const submitHandler = (e) => {
        e.preventDefault()
        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false)
            return
        }
        props.onAddToCart(enteredAmountNumber)
    }
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref = {amountInputRef}
                label="Amount"
                input={{
                    id: Math.random(),
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue : "1"
                }}
            />
            <button>Add</button>
            {!amountIsValid && <p>Enter Valid amount</p>}
        </form>
    );
}

export default MealItemForm;
