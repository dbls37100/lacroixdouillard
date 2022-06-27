import styles from "../styles/components/location.module.css";
// import Maps from "./Maps";

const Location = () => {
  return (
    <div className={styles.Location}>
      <h3>Ou nous trouver</h3>
      <div>
        <h5>Adresse</h5>
        <p>510 Quai des Violettes, 37400 Amboise</p>
      </div>
      <div className={styles.Location_iFrame_mobile}>
        <iframe
          width="350"
          height="300"
          src="https://api.maptiler.com/maps/c795e896-f66d-42ab-a214-abfcd5d06276/?key=BMUKDpp6B2okBlMX42LJ#15.6/47.42265/1.00550"
        ></iframe>
      </div>
      <div className={styles.Location_iFrame_desktop}>
        <iframe
          width="800"
          height="500"
          src="https://api.maptiler.com/maps/c795e896-f66d-42ab-a214-abfcd5d06276/?key=BMUKDpp6B2okBlMX42LJ#15.6/47.42265/1.00550"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
