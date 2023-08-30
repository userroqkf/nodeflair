import JobContainer from "./JobContainer";
import styles from "../styles/AppContainer.module.css"
export default function AppContainer() {
  return (
    <div className={styles.appContainer}>
      <JobContainer />
    </div>
  )
}