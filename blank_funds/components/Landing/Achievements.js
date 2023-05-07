import React from "react";
import styles from '@/styles/Achievements.module.css';

const STATS = [
  {
    title: "Inspirational Text",
    text: "This is some text that I am having to put in because for some reason lorem ipsum is refusing to work can you believe it ? This is ridiculous!"
  },
  {
    title: "Inspirational Text",
    text: "This is some text that I am having to put in because for some reason lorem ipsum is refusing to work can you believe it ? This is ridiculous!"
  },
  {
    title: "Inspirational Text",
    text: "This is some text that I am having to put in because for some reason lorem ipsum is refusing to work can you believe it ? This is ridiculous!"
  }
]

export default function HeroBottom() {
  return (
    <div className={styles.achievements}>
      <hr className={styles.hrStyle} />
      <h1 className={styles.achievementsTitle}>Achievements</h1>
      <div className={`${styles.gridContainer}  ${styles.heroBottom}`}>
        {STATS.map((stat) => (
          <div className={styles.statCard}>
            <div className={styles.statTitle}>
              {stat.title}
            </div>
            <div className={`${styles.statText} p-4`}>
              {stat.text}
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}
