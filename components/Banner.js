import React from "react";
import styles from "../styles/components/Banner.module.css";

const Banner = () => {
  return (
    <section className={styles.Banner}>
      <div className={styles.Banner_div_text_Invisible}></div>
      <div className={styles.Banner_div_text}>
        <h1 className={styles.Banner_text}>
          Bienvenue aux Caves de la Croix Douillard
        </h1>
        <p className={styles.Banner_text1}>
          La Cave de la Croix Douillard vous accueille dans sa salle de
          réception au décor atypique et soigné pour organiser tous vos
          évènements.
        </p>
      </div>
    </section>
  );
};

export default Banner;
