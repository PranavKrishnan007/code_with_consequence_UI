import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { useRouter } from "next/router";
import styles from "styles/Navbar.module.css";

export default function Navbar() {
    const router = useRouter();

    return (
        <div className={styles.navbar}>
            <div className={styles.icon}>
                <BsFillGridFill size={22} />
            </div>
            <div className={styles.menu}>
                <div className={`${styles.menuItem} ${styles.home}`} onClick={() => router.push("/")}>
                    Home
                </div>
                <div className={styles.menuItem} onClick={() => router.push("/listings")}>
                    Organisations
                </div>
                <div className={styles.menuItem}>Stories</div>
                <div className={styles.menuItem}>About</div>
                <div className={styles.menuItem}>Profile</div>
            </div>
        </div>
    );
}
