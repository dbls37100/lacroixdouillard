import React from "react";
import styles from "../styles/components/Description.module.css";
import Image from "next/image";

const Description = ({ setColorAfter }) => {
  return (
    <section className={styles.Description} id="Description">
      <h2>Les Caves de la croix Douillard, qu&apos;est ce que c&apos;est ? </h2>
      {/* <Parallax
        // onProgressChange={(progress) => setProgress(progress)}
        onEnter={() => setColorAfter(true)}
      /> */}
      <p className={styles.Description_p}>
        Félicitations, vous venez de trouver votre prochain lieu de fetes
        favoris. Dans cet établissement vous disposerez de plusieurs salles pour
        vos petits évènements de 50 personnes mais également pour vos
        manifestations de plus grandes envergures pouvant ainsi accueillir 1000
        personnes. Ce décor hors du commun fera de votre évènement un moment
        inoubliable.
      </p>
    </section>
  );
};

export default Description;
