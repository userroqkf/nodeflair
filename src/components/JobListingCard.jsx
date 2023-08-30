import JobListingBottom from "./JobListingBottom";
import JobListingTopContainer from "./JobListingTopContainer";
import styles from "../styles/JobListingCard.module.css"

export default function JobListingCard({compnayIconURL, companyRating, companyName, positionName, jobTitle, timeAgo, location, salaryRange, techStackList}) {
  return (
    <div className={styles.jobListingCardPadding}>
      <div className={styles.jobListingCard}>
        <JobListingTopContainer
          compnayIconURL={compnayIconURL}
          companyRating={companyRating}
          companyName={companyName}
          positionName={positionName}
          jobTitle={jobTitle}
          timeAgo={timeAgo}
          location={location}
          salaryRange={salaryRange}
          />
        <JobListingBottom techStackList={techStackList} />
      </div>
    </div>
  )
}