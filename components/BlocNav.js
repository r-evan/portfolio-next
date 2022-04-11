import React from 'react';
import Link from 'next/link';
import styles from '../styles/blocNav.module.scss';

const BlocNav = ({ lien, children }) => {
    return (
        <Link href={lien} passHref >
            <div className={styles.bloc}>
                {children}
            </div>

        </Link>
    );
};

export default BlocNav;