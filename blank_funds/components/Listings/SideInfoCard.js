import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import styles from "styles/SideInfoCard.module.css";

export default function SideInfoCard({ org }) {
  const percentage = (org.funds_required - org.funds_raised)/org.funds_required * 100;

  return (
    <div className={styles.sideInfoCard}>
      <div className={styles.content}>
        <h3 className={styles.title}>{org.name}</h3>
        <div className={styles.details}>
          <p>{org.details}</p>
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <BsTelephone />
            <p className={styles.contactText}>{org.phone}</p>
          </div>
          <div className={styles.contactItem}>
            <FiMail />
            <p className={styles.contactText}>{org.email}</p>
          </div>
        </div>
        <div className={styles.progress}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{width: `${percentage}`}}></div>
          </div>
        </div>
        <div>
          <div className={styles.donateButton}>Donate</div>
        </div>
      </div>
    </div>
  );
}
