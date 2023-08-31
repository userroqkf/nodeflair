import styles from "../styles/TimePosted.module.css";

export default function TimePosted({timeAgo}) {
  return (
    <span className={styles.timePosted}>
      {timeAgo}
    </span>
  );
}