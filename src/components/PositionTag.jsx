import styles from "../styles/PositionTag.module.css"

export default function PositionTag({positionName}) {
  return (
    <div className={styles.positionTag}>
      {positionName}
    </div>
  )
}