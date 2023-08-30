import JobListingSalaryContainer from "./JobListingSalaryContainer";
import TimePostedLocationContainer from "./TimePostedLocationContainer";
import styles from "../styles/JobListingCardDetailsContainer.module.css"

export default function JobListingCardDetailsContainer({timeAgo, location, salaryRange}) {
  return (
    <div className={styles.jobListingCardDetailsContainer}>
      <TimePostedLocationContainer timeAgo={timeAgo} location={location}/>
      <JobListingSalaryContainer salaryRange={salaryRange}/>
    </div>
  )
}