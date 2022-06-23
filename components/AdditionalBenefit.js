import styles from "../styles/components/AdditionalBenefit.module.css";
import Image from "next/image";

const AdditionalBenefit = () => {
  return (
    <section className={styles.AdditionalBenefit}>
      <h3 className={styles.AdditionalBenefit_h3_title}>Les petits +</h3>
      <div className={styles.AdditionalBenefit_div_blockItem}>
        <div className={styles.AdditionalBenefit_div_itemCard}>
          <div className={styles.AdditionalBenefit_div_wrapperImage}>
            <div className={styles.AdditionalBenefit_div_image}>
              <Image
                alt="espaces modulable des caves de la croix douillard"
                src="/assets/size.png"
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
                src="/assets/people.png"
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
        <div className={styles.AdditionalBenefit_div_itemCard}>
          <div className={styles.AdditionalBenefit_div_wrapperImage}>
            <div className={styles.AdditionalBenefit_div_image}>
              <Image
                alt="espaces en metre carrée des caves de la croix douillard est de 3450 metre carrée."
                src="/assets/ruban.png"
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
        </div>
        <div className={styles.AdditionalBenefit_div_itemCard}>
          <div className={styles.AdditionalBenefit_div_wrapperImage}>
            <div className={styles.AdditionalBenefit_div_image}>
              <Image
                alt="Nombre de places de parking des caves de la croix douillard"
                src="/assets/parking.png"
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
            {" "}
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
                src="/assets/kitchen.png"
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
                src="/assets/wc.png"
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
        <div className={styles.AdditionalBenefit_div_itemCard}>
          <div className={styles.AdditionalBenefit_div_wrapperImage}>
            <div className={styles.AdditionalBenefit_div_image}>
              <Image
                alt="vestiaire des caves de la croix douillard"
                src="/assets/dinner.png"
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
                src="/assets/wifi.png"
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
        <div className={styles.AdditionalBenefit_div_itemCard}>
          <div className={styles.AdditionalBenefit_div_wrapperImage}>
            <div className={styles.AdditionalBenefit_div_image}>
              <Image
                alt="vestiaire des caves de la croix douillard"
                src="/assets/vestiaire.png"
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
      </div>
    </section>
  );
};

export default AdditionalBenefit;
