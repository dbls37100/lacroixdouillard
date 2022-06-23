import styles from "../styles/components/location.module.css";
import Maps from "./Maps";

const Location = () => {
  return (
    <div className={styles.Location}>
      <h5 className={styles.Location_h5_title}>Ou nous trouver</h5>
      <div>
        <h3>Adresse</h3>
        <p>510 Quai des Violettes, 37400 Amboise</p>
      </div>
      <Maps />
    </div>
  );
};

export default Location;
