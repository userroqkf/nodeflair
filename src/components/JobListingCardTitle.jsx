import styles from "../styles/JobListingCardTitile.module.css";

export default function JobListingCardTitle({jobTitle}) {
  return (
    <h2 className={styles.jobListingCardTitle}>
      {jobTitle}
    </h2>
  );
}