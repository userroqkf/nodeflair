import Location from "./Location";
import TimePosted from "./TimePosted";
import styles from "../styles/TimePostedLocationContainer.module.css";
export default function TimePostedLocationContainer({timeAgo, location}) {
  return (
    <div className={styles.timePostedLocationContainer}>
      <TimePosted timeAgo={timeAgo} />
      <Location location={location} />
    </div>
  );
}