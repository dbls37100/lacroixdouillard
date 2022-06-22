import styles from "../styles/components/location.module.css";
import Maps from "./Maps";

const Location = () => {
  return (
    <div className={styles.Location}>
      <h5 className={styles.Location_h5_title}>Ou nous trouver</h5>
      <Maps />
    </div>
  );
};

export default Location;
