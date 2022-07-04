import React, { useState } from "react";
import styles from "../styles/components/location.module.css";
import { Parallax } from "react-scroll-parallax";
import Maps from "./Maps";

const Location = () => {
  const [entered, setEntered] = useState(false);
  return (
    <div className={styles.Location}>
      <h3
        className={
          entered === true
            ? styles.OurRoom_h5_title
            : styles.OurRoom_h5_title_normal
        }
      >
        Ou nous trouver
      </h3>
      <Parallax
        // onProgressChange={(progress) => setProgress(progress)}
        onEnter={() => setEntered(true)}
        onExit={() => setEntered(false)}
      />
      <div>
        <h5>Adresse</h5>
        <p>510 Quai des Violettes, 37400 Amboise</p>
      </div>
      <div className={styles.Location_iFrame_mobile}>
        {/* <iframe
          width="350"
          height="300"
          src="https://api.maptiler.com/maps/c795e896-f66d-42ab-a214-abfcd5d06276/?key=BMUKDpp6B2okBlMX42LJ#15.6/47.42265/1.00550"
        ></iframe> */}
        {/* <Maps /> */}
      </div>
      <div className={styles.Location_iFrame_desktop}>
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
