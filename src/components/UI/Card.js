import React from 'react';
import styles from "./Card.Module.css"
const Card = (props) => {
    return (
        <div className = {styles.card}>
            {props.children}
        </div>
    );
}

export default Card;
