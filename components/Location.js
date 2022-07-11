import React, { useState } from "react";
import styles from "../styles/components/location.module.css";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import maps from "/public/maps.PNG";
import maps2 from "/public/maps2.PNG";
// import Maps from "./Maps";

const Location = () => {
  const [entered, setEntered] = useState(false);
  return (
    <div className={styles.Location}>
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
        Ou nous trouver
      </h3>
      <p className={styles.Photos_p_text}>
        Les Caves de la Croix Douillard sont située à Amboise sur les bords de
        la loire, au coeur de la touraine. A moins de 10 min à pied des caves
        vous trouverez de nombreux bars, restaurant, café, activités, hotels et
        hébergement en tout genre.
      </p>
      <div className={styles.Location_div_adress}>
        <h4>Adresse</h4>
        <p>510 Quai des Violettes, 37400 Amboise</p>
      </div>
      <div className={styles.Location_iFrame_mobile}>
        {/* <iframe
          width="350"
          height="300"
          src="https://api.maptiler.com/maps/c795e896-f66d-42ab-a214-abfcd5d06276/?key=BMUKDpp6B2okBlMX42LJ#15.6/47.42265/1.00550"
        ></iframe> */}
        {/* <Maps /> */}
        <Image
          src={maps}
          alt="localisation des caves de la croix douillard"
          // layout="responsive"
          width={350}
          height={300}
        />
      </div>
      <div className={styles.Location_iFrame_desktop}>
        <Image
          src={maps2}
          id="logo"
          alt="localisation des caves de la croix douillard"
          // layout="fixed"
          width={800}
          height={500}
        />
        {/* <iframe
          width="800"
          height="500"
          src="https://api.maptiler.com/maps/c795e896-f66d-42ab-a214-abfcd5d06276/?key=BMUKDpp6B2okBlMX42LJ#15.6/47.42265/1.00550"
        ></iframe> */}
        {/* <Maps /> */}
      </div>
    </div>
  );
};

export default Location;
