import React from "react";
import {CiInstagram, CiMail, CiTwitter} from "react-icons/ci";
import styles from '@/styles/Footer.module.css';
import Image from "next/image";
import logo from "@/public/assets/Logo.svg";

export default function Footer() {
    return (
        <div id="Contact" className={` ${styles.padding} dropShadow-2xl`} >
            {/* this is custom CSS not tailwind CHILL ! */}
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.item}>
                        <span>Contact</span>
                        <div onClick={() => window.location = 'mailto:blankfunds@gmail.com'} style={{textDecoration: "underline"}}>pfund@gmail.com</div>
                        <div>#177A/bleecker street</div>
                    </div>
                    <div className={styles.item}>
                        <span>Follow us</span>
                        <div style={{display:"flex", gap: "1.25rem" }}>
                            <a href="https://www.instagram.com/blankfunds/" target="_blank" rel="noopener noreferrer">
                                <CiMail size={22}  />
                            </a>
                            <a href="https://mail.google.com/mail/blankFunds" target="_blank" rel="noopener noreferrer">
                                <CiInstagram size={22} />
                            </a>
                            <a href="https://twitter.com/blankfunds/" target="_blank" rel="noopener noreferrer">
                                <CiTwitter size={22} />
                            </a>
                        </div>
                        <div style={{display: "flex"}}>
                            __BlankFunds__.org
                            <span>
                             <Image
                                 src={logo}
                                 alt="Logo"
                                 width={20}
                                 style={{ cursor: "pointer" , marginTop: "-6px" , marginLeft: "1rem"}}
                                 onClick={() => router.push("/")}
                             />
                          </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
