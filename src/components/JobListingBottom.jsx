import styles from "../styles/JobListingBottom.module.css";
import TechStackContainer from "./TechStackContainer";

export default function JobListingBottom({techStackList}) {
  return (
    <div className={styles.jobListingBottom}>
      {techStackList.map((techStack, index) => {
        return <TechStackContainer key={index} techStack={techStack} />;
      })}
    </div>
  );
}