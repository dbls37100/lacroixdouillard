import React from "react";
import styles from "../styles/components/Description.module.css";
import Image from "next/image";

const Description = () => {
  return (
    <section className={styles.Description} id="Description">
      {/* <p>
        La Cave de la Croix Douillard vous accueille dans sa salle de réception
        au décor atypique et soigné pour organiser tous vos évènements. Dans cet
        établissement vous disposerez de plusieurs salles pour vos petits
        évènements de 50 personnes mais également pour vos manifestations de
        plus grandes envergures pouvant ainsi accueillir 1000 personnes. Ce
        décor hors du commun fera de votre évènement un moment inoubliable.
      </p> */}
      <h2>Les Caves de la croix Douillard, qu&apos;est ce que c&apos;est ? </h2>
      {/* <Image
        src="/unesco.jpg"
        alt="description"
        className={styles.Description_image}
        width={250}
        height={150}
      /> */}
      <p className={styles.Description_p}>
        Ancienne exploitation de roche dure, ayant servi à bâtir les châteaux et
        monuments qui font la richesse du Val de Loire, Les Caves de la Croix
        Douillard sont en bordure de Loire Fleuve Royal classé patrimoine de
        l&apos;unesco. Situées dans un cadre naturel de roche et de verdure qui
        vous invite à entrer dans ce décor agréable et inhabituel, elles ont été
        aménagées pour offrir un espace de réception dans un cadre exceptionnel
        et chaleureux. Leur caractère pittoresque se prête au jeu de nombreuses
        mises en scène et invite à l&apos;insolite.
      </p>
    </section>
  );
};

export default Description;
