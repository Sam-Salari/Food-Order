import React from "react";
import mealsImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Order with us</h1>
        <HeaderCartButton value="Your Cart"/>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="A table full of food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
