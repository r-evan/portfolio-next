import React from 'react';
import styles from '../styles/paragraphe.module.scss';


const Paragraphe = ({ children }) => {
    return (
        <div className={styles["para"]}>
            <section>
                {children}
            </section>
        </div>
    );
};

export default Paragraphe;