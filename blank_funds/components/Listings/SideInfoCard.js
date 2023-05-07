import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import styles from "styles/SideInfoCard.module.css";
import { GoLocation } from "react-icons/go";
import { useRouter } from "next/router";

export default function SideInfoCard({ org }) {
  const percentage = (1 - (org.funds_required - org.funds_raised) / org.funds_required) * 100;
  const router = useRouter();
  return (
    <div className={styles.sideInfoCard}>
      <div className={styles.content}>
        <h3 className={styles.title}>{org.name}</h3>
        <div className={styles.location}>
          <GoLocation size={22} />
          <p className={styles.orglocationText}>{org.location}</p>
        </div>
        <div className={styles.details}>
          <p>{org.about}</p>
        </div>
        <div className={styles.contactInfo}>
          <h1 className={styles.heading}>React Out to Us</h1>
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
          <div className={styles.funds}>
            <p>Funds Required:{org.funds_required}</p>
            <p>Funds Raised:{org.funds_raised}</p>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${percentage}%` }}></div>
          </div>
        </div>
        <div>

          <div className={styles.donateButton} onClick={() => router.push(`/donate/${org.id}`)}>Donate</div>

        </div>
      </div>
    </div>
  );
}
