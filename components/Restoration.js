import React, { useState } from "react";
import styles from "../styles/components/Restoration.module.css";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
const Restoration = () => {
  const [entered, setEntered] = useState(false);
  return (
    <section className={styles.Restoration}>
      <Parallax
        // onProgressChange={(progress) => setProgress(progress)}
        onEnter={() => setEntered(true)}
        onExit={() => setEntered(false)}
      />
      <h3
        className={
          entered === true
            ? styles.OurRoom_h5_title
            : styles.OurRoom_h5_title_normal
        }
      >
        Restauration
      </h3>
      <div className={styles.Restoration_div_images}>
        <Image
          src="/traiteur.jpg"
          alt="Restauration"
          width={"80%"}
          height={"30%"}
          layout="responsive"
          //   className={styles.Restoration_image}
        />
      </div>
      <p className={styles.Restoration_p_description}>
        Besoin d&apos;un traiteur ? Les Caves de la Croix Douillard peuvent vous
        aider. Nous disposons d&apos;un traiteur de qualité, suivant vos envies
        et votre besoin. Si vous souhaitez plus d&apos;information, ou un devis,
        n&apos;hésitez pas à nous contacter en cliquant sur le lien ci-dessous.
      </p>
      <button className={styles.Restoration_button}>
        <a
          href="https://www.hotelrestaurant-labonneetape.com/index.php/traiteur-amboise-37"
          target="_blank"
          rel="noreferrer"
        >
          Découvrez notre traiteur
        </a>
      </button>
      <h5>Nos clients</h5>
      <p>
        Val Touraine habitat , Sogarep , Edf , Relaxsens , Action enfance ,
        Gaumont cinéma (tournage au château d&apos;Amboise)
      </p>
    </section>
  );
};

export default Restoration;
