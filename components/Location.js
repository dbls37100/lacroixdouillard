import styles from "../styles/components/location.module.css";
import Maps from "./Maps";

const Location = () => {
  return (
    <div className={styles.Location}>
      <h3>Ou nous trouver</h3>
      <div>
        <h5>Adresse</h5>
        <p>510 Quai des Violettes, 37400 Amboise</p>
      </div>
      <Maps />
    </div>
  );
};

export default Location;
