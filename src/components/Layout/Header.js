import React from 'react';
import styles from "./Header.Module.css"
import mealsimage from "../assets/meals.jpg"
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className = {styles["main-image"]}>
                <img src={mealsimage} alt="Food" />
            </div>
        </React.Fragment>
    );
}   

export default Header;
