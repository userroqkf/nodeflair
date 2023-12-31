import CompanyRating from "./CompanyRating";
import styles from "../styles/CompanyNameAndRating.module.css";

export default function CompanyNameAndRating({companyName, companyRating}) {
  return (
    <div className={styles.companyNameAndRating}>
      <span className={styles.companyName}>{companyName}</span>
      <CompanyRating rating={companyRating}/>
    </div>
  );
}