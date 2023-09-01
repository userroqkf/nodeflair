import JobInformationContainer from "./JobInformationContainer";
import JobListingCardContainer from "./JobListingCardContainer";
import styles from "../styles/JobContainer.module.css";
import { useState } from "react";
import { jobListings } from "../JobListingsData";

export default function JobContainer() {
  const [focus, setFocus] = useState(null);

  return (
    <div className={styles.jobContainer}>
      <JobListingCardContainer jobListingList={jobListings} focus={focus} setFocus={setFocus} />
      <JobInformationContainer jobTitle={focus !== null ? jobListings[focus].jobTitle : "" }/>
    </div>
  );
}