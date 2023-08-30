import CompnayNameAndRating from "./CompanyNameAndRating"
import JobListingCardTitle from "./JobListingCardTitle"
import styles from "../styles/JobInformationCardContainer.module.css"

export default function JobInformationCardContainer({companyName, companyRating, jobTitle}) {
  return (
    <div className={styles.JobInformationCardContainer}>
      <CompnayNameAndRating companyName={companyName} companyRating={companyRating} />
      <JobListingCardTitle jobTitle={jobTitle}/>
    </div>
  )
}