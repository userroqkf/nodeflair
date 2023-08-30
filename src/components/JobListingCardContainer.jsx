import JobListingCard from "./JobListingCard"
import styles from "../styles/JobListingCardContainer.module.css"

export default function JobListingCardContainer({jobListingList}) {
  return (
    <div className={styles.jobListingCardContainer}>
      {jobListingList.map((jobListing, index) => {
        const { compnayIconURL, companyRating, companyName, positionName, jobTitle, timeAgo, location, salaryRange, techStackList } = jobListing;
        return (
          <JobListingCard
            key={index}
            compnayIconURL={compnayIconURL}
            companyRating={companyRating}
            companyName={companyName}
            positionName={positionName}
            jobTitle={jobTitle}
            timeAgo={timeAgo}
            location={location}
            salaryRange={salaryRange}
            techStackList={techStackList}
          />
        )
      })}
    </div>
  )
}