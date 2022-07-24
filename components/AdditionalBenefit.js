import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import styles from "../styles/components/AdditionalBenefit.module.css";
import Image from "next/image";
import dinner from "/public/assets/dinner.png";
import parking from "/public/assets/parking.png";
import kitchen from "/public/assets/kitchen.png";
import people from "/public/assets/people.png";
import ruban from "/public/assets/ruban.png";
import size from "/public/assets/size.png";
import vestiaire from "/public/assets/vestiaire.png";
import wc from "/public/assets/wc.png";
import wifi from "/public/assets/wifi.png";

const AdditionalBenefit = ({ setColorAfter }) => {
  const [entered, setEntered] = useState(false);
  return (
    <section className={styles.AdditionalBenefit}>
      <Parallax
        // onProgressChange={(progress) => setProgress(progress)}
        onEnter={() => setEntered(true)}
        onExit={() => setEntered(false)}
      />
      <h2
        className={
          entered === true
            ? styles.OurRoom_h5_title
            : styles.OurRoom_h5_title_normal
        }
      >
        Les petits +
      </h2>
      <p className={styles.AdditionalBenefit_p}>
        Situées dans un cadre naturel de roche et de verdure qui vous invite à
        entrer dans ce décor agréable et inhabituel, elles ont été aménagées
        pour offrir un espace de réception dans un cadre exceptionnel et
        chaleureux. Leur caractère pittoresque se prête au jeu de nombreuses
        mises en scène et invite à l&apos;insolite.
      </p>
      <div className={styles.AdditionalBenefit_div_blockItem}>
        <div className={styles.AdditionalBenefit_div_itemCard_hidden}>
          <div className={styles.AdditionalBenefit_div_wrapperImage}>
            <div className={styles.AdditionalBenefit_div_image}>
              <Image
                alt="espaces modulable des caves de la croix douillard"
                src={size}
                // loading={"lazy"}
                layout="fill"
                className={styles.Photos_image}
                priority="low"
                sx={{
                  position: "relative",
                }}
              />
            </div>
          </div>
          <div>
            <p className={styles.AdditionalBenefit_p_texItem}>2 espaces</p>
          </div>
        </div>
        <div className={styles.AdditionalBenefit_div_itemCard}>
          <div className={styles.AdditionalBenefit_div_wrapperImage}>
            <div className={styles.AdditionalBenefit_div_image}>
              <Image
                alt="Nombres de personnes dans les caves de la croix douillard"
                src={people}
                layout="fill"
                className={styles.Photos_image}
                priority="low"
                sx={{
                  position: "relative",
                }}
              />
            </div>
          </div>
          <div>
            <p className={styles.AdditionalBenefit_p_texItem}>
              50 à 1000 personnes
            </p>
          </div>
        </div>
        {/* <div className={styles.AdditionalBenefit_div_itemCard}>
          <div className={styles.AdditionalBenefit_div_wrapperImage}>
            <div className={styles.AdditionalBenefit_div_image}>
              <Image
                alt="espaces en metre carrée des caves de la croix douillard est de 3450 metre carrée."
                src={ruban}
                layout="fill"
                className={styles.Photos_image}
                priority="low"
                sx={{
                  position: "relative",
                }}
              />
            </div>
          </div>
          <div>
            <p className={styles.AdditionalBenefit_p_texItem}>3450 m²</p>
          </div>
        </div> */}
        <div className={styles.AdditionalBenefit_div_itemCard}>
          <div className={styles.AdditionalBenefit_div_wrapperImage}>
            <div className={styles.AdditionalBenefit_div_image}>
              <Image
                alt="Nombre de places de parking des caves de la croix douillard"
                src={parking}
                layout="fill"
                className={styles.Photos_image}
                priority="low"
                sx={{
                  position: "relative",
                }}
              />
            </div>
          </div>
          <div>
            <p className={styles.AdditionalBenefit_p_texItem}>
              250 places de parking
            </p>
          </div>
        </div>
        <div className={styles.AdditionalBenefit_div_itemCard}>
          <div className={styles.AdditionalBenefit_div_wrapperImage}>
            <div className={styles.AdditionalBenefit_div_image}>
              <Image
                alt="espaces cuisine des caves de la croix douillard"
                src={kitchen}
                // loading={"lazy"}
                layout="fill"
                className={styles.Photos_image}
                priority="low"
                sx={{
                  position: "relative",
                }}
              />
            </div>
          </div>
          <p className={styles.AdditionalBenefit_p_texItem}>espace cuisine</p>
        </div>
        <div className={styles.AdditionalBenefit_div_itemCard}>
          <div className={styles.AdditionalBenefit_div_wrapperImage}>
            <div className={styles.AdditionalBenefit_div_image}>
              <Image
                alt="Sanitaires nombreux des caves de la croix douillard"
                src={wc}
                // loading={"lazy"}
                layout="fill"
                className={styles.Photos_image}
                priority="low"
                sx={{
                  position: "relative",
                }}
              />
            </div>
          </div>
          <div>
            <p className={styles.AdditionalBenefit_p_texItem}>
              vestiaires et sanitaires
            </p>
          </div>
        </div>
        <div className={styles.AdditionalBenefit_hidden}></div>
        <div className={styles.AdditionalBenefit_div_itemCard}>
          <div className={styles.AdditionalBenefit_div_wrapperImage}>
            <div className={styles.AdditionalBenefit_div_image}>
              <Image
                alt="vestiaire des caves de la croix douillard"
                src={dinner}
                // loading={"lazy"}
                layout="fill"
                className={styles.Photos_image}
                priority="low"
                sx={{
                  position: "relative",
                }}
              />
            </div>
          </div>
          <div>
            <p className={styles.AdditionalBenefit_p_texItem}>
              meubles et vaisselle
            </p>
          </div>
        </div>
        <div className={styles.AdditionalBenefit_div_itemCard}>
          <div className={styles.AdditionalBenefit_div_wrapperImage}>
            <div className={styles.AdditionalBenefit_div_image}>
              <Image
                alt="Wifi disponibles aux caves de la croix douillard"
                src={wifi}
                // loading={"lazy"}
                layout="fill"
                className={styles.Photos_image}
                priority="low"
                sx={{
                  position: "relative",
                }}
              />
            </div>
          </div>
          <div>
            <p className={styles.AdditionalBenefit_p_texItem}>Wi-Fi</p>
          </div>
        </div>
        <div className={styles.AdditionalBenefit_div_itemCard_hidden}>
          <div className={styles.AdditionalBenefit_div_wrapperImage}>
            <div className={styles.AdditionalBenefit_div_image}>
              <Image
                alt="vestiaire des caves de la croix douillard"
                src={vestiaire}
                // loading={"lazy"}
                layout="fill"
                className={styles.Photos_image}
                priority="low"
                sx={{
                  position: "relative",
                }}
              />
            </div>
          </div>
          <div>
            <p className={styles.AdditionalBenefit_p_texItem}>Vestiare</p>
          </div>
        </div>
        <div className={styles.AdditionalBenefit_hidden}></div>
      </div>
    </section>
  );
};

export default AdditionalBenefit;
