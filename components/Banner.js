import React from "react";
import styles from "../styles/components/Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.Banner}>
      <div className={styles.Banner_div_text_Invisible}></div>
      <div className={styles.Banner_div_text}>
        <h1>
          <span className={styles.Banner_text}>
            Bienvenue aux Caves de la Croix Douillard
          </span>
        </h1>
        <p className={styles.Banner_text}>
          La Cave de la Croix Douillard vous accueille dans sa salle de
          réception au décor atypique et soigné pour organiser tous vos
          évènements.
        </p>
      </div>
    </div>
  );
};

export default Banner;
