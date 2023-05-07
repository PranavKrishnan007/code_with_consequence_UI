import React from "react";
import styles from "@/styles/HeroBottom.module.css";

const STATS = [
  {
    title: "21K+",
    text: "Active Donors"
  },
  {
    title: "4K+",
    text: "Projects"
  },
  {
    title: "100K+",
    text: "Helpers"
  }
];

export default function HeroBottom() {
  return (
    <div className={styles.container}>
      <div className={styles.hrContainer}>
        <div className={styles.borderStyle} />
      </div>
      <div className={styles.gridContainer}>
        <div
            // className="grid grid-cols-1 md:grid-cols-3"
            className={styles.girdSection}
        >
          {STATS.map((stat) => (
            <div className={`${styles.statCard}`}>
              <div className={`${styles.statTitle}`}>
                {stat.title}
              </div>
              <div className={`${styles.statText}`}>
                {stat.text}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.wavyLineContainer}>
          <img src='/assets/wavy_line.svg' alt='wavy_image' width={200} />
        </div>
        
  <figure className={styles.quoteContainer}>
    <svg aria-hidden="true" className={styles.quoteIcon} viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
          <blockquote>
            <p className={styles.quoteText}>
              "Things in life is not what you think they are so before you die donate a little money please you know. Just so that someone else can live a better life. Come on."
            </p>
          </blockquote>
          <figcaption className={styles.quoteInfo}>
            <img className={styles.quoteProfile} src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
            <div className="flex items-center divide-x-2 divide-gray-500">
              <cite className={styles.quoteName}>Pranav Krishnan</cite>
              <cite className={styles.quoteJob}>Employee at Traboda</cite>
            </div>
          </figcaption>
        </figure>
      </div>
      </div>
);}