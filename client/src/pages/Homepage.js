import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/home.module.css";

function HomePage() {
  return (
    <div className={styles["header"]}>
      <div className={styles["header-div-one"]}>
        <h1>Welcome to Sweat Smart</h1>
        <p>
          Get fit and healthy with our personalized workout plans and nutrition
          programs.
        </p>
      </div>

      <div className={styles['header-div-two']}>
        <p></p>

      </div>

    </div>
  );
}

export default HomePage;
