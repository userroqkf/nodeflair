import JobListingCardContainer from "./JobListingCardContainer";
import styles from "../styles/JobLstingContainer.module.css";
export default function JobListingContainer({jobListingList}) {
  return (
    <divi className={`${styles.container}`}>
      <JobListingCardContainer jobListingList={jobListingList}/>
      <div>
      </div>
    </divi>
  );
}