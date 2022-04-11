import React from 'react';
import styles from "../styles/jauge.module.scss"
const Jauge = ({titre, visible, i, width}) => {
    return (
        <div className={styles.savoir}>
            <h5>{ titre }</h5>
            <div className={styles.barre}>
                <div className={`${visible == true ? styles.jauge : ""}`} style={{ "--i": i, "--width": width }}></div>
            </div>
        </div>
    );
};

export default Jauge;