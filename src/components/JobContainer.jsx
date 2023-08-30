import JobInformationContainer from "./JobInformationContainer"
import JobListingCardContainer from "./JobListingCardContainer"
import styles from "../styles/JobContainer.module.css"

export default function JobContainer() {

const techStackListExample = ["Rest API", "API", "play", "Modular", "Node.js"]

const jobListing = {
    compnayIconURL: "https://nodeflair.com/companies/240.png",
    companyName: "TikTok",
    positionName: "Backend",
    companyRating: "3.6",
    jobTitle: "Full Stack Engineer",
    timeAgo: "about 13 hours ago",
    location: "Singapore",
    salaryRange: "S$6,140 - S$11,960 / mth",
    techStackList: techStackListExample
}
const jobListings = Array(10).fill(jobListing);


  return (
    <div className={styles.jobContainer}>
      <JobListingCardContainer jobListingList={jobListings}/>
      <JobInformationContainer jobTitle={"Testing it out"}/>
    </div>
  )
}