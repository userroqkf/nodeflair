import JobListingCard from "./JobListingCard";
import styles from "../styles/JobListingCardContainer.module.css";

export default function JobListingCardContainer({jobListingList, focus, setFocus}) {
  return (
    <div className={styles.jobListingCardContainer}>
      {jobListingList.map((jobListing, index) => {
        const { compnayIconURL, companyRating, companyName, positionName, jobTitle, timeAgo, location, salaryRange, techStackList } = jobListing;
        return (
          <JobListingCard
            key={index}
            id={index}
            setFocus={setFocus}
            selected={focus === index}
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
        );
      })}
    </div>
  );
}