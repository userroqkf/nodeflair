import PositionTag from "./PositionTag";
import styles from "../styles/PositionTagContainer.module.css"

export default function PositionTagContainer({positionName}) {
  return (
    <div className={styles.positionTagContainer}>
      <PositionTag positionName={positionName}/>
    </div>
  )
}