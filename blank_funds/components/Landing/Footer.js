import React from "react";
import {CiInstagram, CiMail, CiTwitter} from "react-icons/ci";
import styles from "styles/Footer.module.css"

export default function Footer() {
    return (
        <div className="dropShadow-2xl">
            {/* this is custom CSS not tailwind CHILL ! */}
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.item}>
                        <span>Contact</span>
                        <div>pfund@gmail.com</div>
                        <div>#177A/bleecker street</div>
                    </div>
                    <div className={styles.item}>
                        <span>Follow us</span>
                        <div className="flex">
                            <CiMail size={22} />
                            <CiInstagram size={22} />
                            <CiTwitter size={22} />
                        </div>
                        <div>__BlankFunds__.org</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
