import React from "react";
import styles from "styles/Hero.module.css"
export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        We are a full-cycle agency that delivers turnkey projects, and by
        identifying .
      </div>
      <video autoPlay muted loop className={styles.video}>
        <source src={"/images/hero_video.mp4"} type="video/mp4" />
      </video>
    </div>
  );
}