import React from 'react';
import Link from 'next/link'
import styles from "../styles/404.module.scss"

const erreur = () => {
    return (
        <div className={styles.container}>
            <p>Erreur 404, page non trouvée !</p>
            <Link href="/">retour</Link>
        </div>
    );
};

export default erreur;