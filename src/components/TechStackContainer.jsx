import styles from "../styles/TechStackContainer.module.css";

export default function TechStackContainer({techStack}) {
  return (
    <span className={styles.techStackContainer}>
      {techStack}
    </span>
    
  );
}