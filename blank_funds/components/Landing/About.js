import React from 'react';
import styles from'styles/AboutSection.module.css';

export default function AboutSection() {
    return (
        <div className={styles.aboutsection}>
            <div className={styles.aboutcontainer}>
                <div className={styles.aboutcontent}>
                    <div className={styles.aboutsubtitle}>pfund</div>
                    <div className={styles.abouttitle}>About Us</div>
                    <img src='/assets/wavy_line.svg' alt='wavy_image' width={200} className={styles.wavyline} />
                    <div className={styles.aboutdescription}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                        of Lorem Ipsum.
                    </div>
                    <div>
                        <a href="#_" className={styles.aboutbutton}>
                            <span className={styles.underline}></span>
                            <span className={styles.arrow} arrow-right></span>
                            <span className={styles.arrow} arrow-left></span>
                            <span className={styles.aboutbuttontext}>Button Text</span>
                        </a>
                    </div>
                </div>
                <div className={styles.aboutimage}>
                    <img src='/assets/kids_looking_up.png' alt='kids' width={500} height={500} />
                </div>
            </div>
            <div className={styles.aboutcontainer}>
                <div className={styles.aboutimage}>
                    <img src='/assets/kids_looking_up.png' alt='kids' width={500} height={500} />
                </div>
                <div className={styles.aboutcontent}>
                    <div className={styles.aboutsubtitle}>Donate to</div>
                    <div className={styles.abouttitle}>Our Cause</div>
                    <img src='/assets/wavy_line.svg' alt='wavy_image' width={200} className={styles.wavyline} />
                    <div className={styles.aboutdescription}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                        of Lorem Ipsum.
                    </div>
                    <div>
                        <a href="#_" className={styles.aboutbutton}>
                            <span className={styles.underline}></span>
                            <span className={styles.arrow} arrow-right></span>
                            <span className={styles.arrow} arrow-left></span>
                            <span className={styles.aboutbuttontext}>Button Text</span>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
