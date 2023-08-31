import styles from "../styles/CompanyIcon.module.css";

export default function CompnayIcon({compnayIconURL, compnayName}) {
  return (
    <div className={styles.companyIconContainer}>
      <img className={styles.compnayIcon} src={compnayIconURL} alt={`${compnayName} Icon`} />
    </div>
  );
}