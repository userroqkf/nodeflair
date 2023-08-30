import JobListingCardDetailsContainer from "./JobListingCardDetailsContainer";
import TopPortion from "./TopPortion";
import styles from "../styles/jobListingTopContainer.module.css"

export default function JobListingTopContainer({compnayIconURL, companyRating, companyName, positionName, jobTitle, timeAgo, location, salaryRange}) {
  return (
    <div className={styles.jobListingTopContainer}>
      <TopPortion 
        compnayIconURL={compnayIconURL}
        companyRating={companyRating}
        companyName={companyName}
        positionName={positionName}
        jobTitle={jobTitle}
      />
      <JobListingCardDetailsContainer
        timeAgo={timeAgo}
        location={location}
        salaryRange={salaryRange} 
      />
    </div>

  )
}