import EstimateSalaryTag from "./EstimateSalaryTag";
import styles from "../styles/JobListingSalaryContainer.module.css";

export default function JobListingSalaryContainer({salaryRange}) {
  return (
    <div className={styles.jobListingSalaryContainer}>
      <span className={styles.salaryRange}>
        {salaryRange}
      </span>
      <EstimateSalaryTag />
    </div>
  );
}