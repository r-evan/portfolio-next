import React from 'react';
import styles from '../styles/accordeon.module.scss';
import { useState } from 'react';

const Accordeon = ({ titre, children }) => {

    const [collapse, setCollapse] = useState(false);

    const handleCollapse = () => {
        setCollapse(!collapse);
    }
    const test = () => {
        console.log("test");
    }

    return (
        <div className={styles["accordeon-parent"]}>
            <div className={styles["accordeon-titre"]} onClick={handleCollapse}>
                <p className={styles["accordeon-symboles"]} >{collapse ? "-" : "+"}</p>
                <h4 className={`${collapse ? styles["accordeon-titre-active"] : ""}`}>{titre}</h4>
            </div>
            
            <div className={`${styles["accordeon-child"]} ${collapse ? styles["accordeon-child-active"] : ""}`}>
                {children}
            </div>
        </div>
    );
};

export default Accordeon;