import JobInformation from "./JobInformation";
import styles from "../styles/JobInformationContainer.module.css"
export default function JobInformationContainer({jobTitle}) {
  return (
    <div className={styles.jobInformationContainer}>
      <JobInformation jobTitle={jobTitle}/>
    </div>
  )
}