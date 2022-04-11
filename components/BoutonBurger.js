import React from 'react';
import styles from "../styles/BoutonBurger.module.scss";
import NavSideBar from './NavSideBar';
import { useEffect, useRef } from 'react';


// next js bouton burger
const BoutonBurger = ({ open, handleClickOut, handleBoutonClick }) => {
    const ref = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handleClickOut();
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [handleClickOut, ref]);

    return (
        <div className={styles.BoutonBurgerContainer} ref={ref}>
            <div className={styles.BoutonBurger} onClick={handleBoutonClick}>
                <div className={`${styles.barre} ${open ? styles.barreActive : ""}`}></div>
            </div>
            <div className={`${styles.sideBar} ${open ? styles.navBarActive : ""}`}>
                <NavSideBar handleClickOut={handleClickOut} />
            </div>
        </div>
    );
};

export default BoutonBurger;