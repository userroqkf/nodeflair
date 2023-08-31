import JobListingBottom from "./JobListingBottom";
import JobListingTopContainer from "./JobListingTopContainer";
import styles from "../styles/JobListingCard.module.css";
import classNames from "classnames";

export default function JobListingCard(props) {
  const {id, selected, setFocus, compnayIconURL, companyRating, companyName, positionName, jobTitle, timeAgo, location, salaryRange, techStackList} = props;

  const changeFocus = () => {
    setFocus(id);
    console.log("clicked", id);
  };

  const jobListingClassName = classNames(styles.jobListingCard, {
    [styles.selected]: selected
  });

  return (
    <div className={styles.jobListingCardPadding} onClick={changeFocus}>
      <div className={jobListingClassName}>
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
  );
}