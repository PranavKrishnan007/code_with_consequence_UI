import React from "react";
import styles from "styles/Block.module.css";

const BLOCK = [
    {
        title: "Inspirational Text",
        text:
            "This is some text that I am having to put in because for some reason lorem ipsum is refusing to work can you believe it ? This is ridiculous!",
    },
    {
        title: "Inspirational Text",
        text:
            "This is some text that I am having to put in because for some reason lorem ipsum is refusing to work can you believe it ? This is ridiculous!",
    },
];

export default function Block() {
    return (
        <div className={styles.blockWrapper}>
            <div className={styles.gridContainer}>
                {BLOCK.map((block) => (
                    <div className={styles.block}>
                        <span className={styles.subtitle}>Blog</span>
                        <div className={styles.text2xl}>{block.title}</div>
                        <div className={styles.textxl}>{block.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
