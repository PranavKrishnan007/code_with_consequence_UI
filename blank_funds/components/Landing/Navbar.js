import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { useRouter } from "next/router";
import styles from '@/styles/Navbar.module.css';
import logo from '../../public/assets/Logo.svg';
import Image from "next/image";

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
                <div>
                    <Image
                        src={logo}
                        alt="Logo"
                        width={30}
                        style={{ cursor: "pointer", marginTop: "-6px" }}
                        onClick={() => router.push("/")}
                    />
                </div>
                <div className={styles.menuItem} onClick={() => router.push("/donate")}>
                Donate
                </div>
                <div  className={styles.menuItem} onClick={() => router.push("/#Contact")}>
                    Contact
                </div>
            </div>
        </div>
    );
}
verticalAlign: "Top"