import CompnayIcon from "./CompnayIcon";
import JobInformationCardContainer from "./JobInformationCardContainer";
import PositionTagContainer from "./PositionTagContainer";
import styles from "../styles/TopPortion.module.css";

export default function TopPortion({compnayIconURL, companyName, positionName, companyRating, jobTitle}) {
  return (
    <div className={styles.topPortion}>
      <CompnayIcon compnayIconURL={compnayIconURL} companyName={companyName}/>
      <PositionTagContainer positionName={positionName}/>
      <JobInformationCardContainer companyName={companyName} companyRating={companyRating} jobTitle={jobTitle}/>
    </div>
  );
}