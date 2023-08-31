import styles from "../styles/Location.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Location({location}) {
  return (
    <div className={styles.location}>
      <FontAwesomeIcon icon={faLocationDot} />
      <span className={styles.locationText}>
        {location}
      </span>
    </div>
  ); 
};
