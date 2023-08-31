import styles from "../styles/JobInformation.module.css";

export default function JobInformation({jobTitle}) {
  return (
    <div className={styles.jobInformation}>
      <div className={styles.jobInformationContent}>
        <h1> {jobTitle} </h1>
      </div>
    </div>
  );
}