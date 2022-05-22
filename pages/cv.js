import styles from "../styles/cv.module.scss"
import React, { useRef, useState } from 'react';
import Jauge from "../components/Jauge"
import Head from "next/head"
import Script from 'next/script'
import Image from 'next/image';


const Cv = () => {

    const [visible, setVisible] = useState(false)
    const container = useRef(null)
    const hiddenRef = useRef(null);
    const scrollHandler = () => {
        if (window.innerHeight + container.current.scrollTop >= 1450)
            setVisible(true)
    }
    return (
        <div className={styles.container} onScroll={scrollHandler} ref={container}>
            <Head>
                <title>CV - Portfolio Evan Rioual</title>
                <meta name="description" content="Page de mise en avant de mon CV,
                vous y trouverez également quelques projets que j'ai réalisés en autonomies">
                </meta>
            </Head>
            <section className={styles.section}>
                <div className={styles.titre}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <h1>CV & Réalisation</h1>
                </div>
            </section>

            <div className={styles.cv}>
                <aside className={styles.aside}>
                    <div className={styles.img}>
                        <Image alt="photos" src="/photos2.jpg" layout="fill" />
                    </div>
                    <h1 className={styles.nom}>Evan Rioual</h1>
                    <div className={styles.block}>
                        <h3>CONTACT</h3>
                        <div className={styles.icon}>
                            <ion-icon name="call-outline"></ion-icon>
                            <p>06 58 43 31 15</p>
                        </div>
                        <div className={styles.icon}>
                            <ion-icon name="location-outline"></ion-icon>
                            <p>29000, Quimper</p>
                        </div>
                        <div className={styles.icon}>
                            <ion-icon name="mail-outline"></ion-icon>
                            <p>evan.rioual@laposte.net</p>
                        </div>
                    </div>
                    <div className={`${styles.block} ${styles.form}`}>
                        <h3>FORMATION</h3>
                        <p>BTS SIO(option SLAM)</p>
                        <p>Lycée Chaptal</p>
                        <p>En cours de formation</p>
                        <p>Moyenne générale ~14</p>
                        <p>Matière forte : développement, math</p><br></br>

                        <p>BAC PRO SN (option RISC)</p>
                        <p>Lycée Yves Thépot</p>
                        <p>2017 - 2020</p>
                        <p>Mention au bac : bien</p>
                    </div>
                    <div className={styles.block}>
                        <h3>LANGUES</h3>
                        <p>Anglais : Niveau B2</p>
                        <p>Français</p>
                    </div>
                    <div className={styles.block}>
                        <h3>PORTFOLIO</h3>
                        <a href="https://evan-portfolio.go.yj.fr/" rel="noreferrer" target="_blank">https://evan-portfolio.go.yj.fr/</a>
                    </div>
                    <div class="block">
                        <h3>GITHUB</h3>
                        <a href="https://github.com/r-evan" target="_blank">https://github.com/r-evan</a>
                    </div>
                </aside>
                <main className={styles.main}>
                    <div className={styles.profil}>
                        <h3>PROFIL</h3>
                        <p>Âgé de 19 ans, je suis d’un tempérament sérieux. De nature curieuse et appliquée,
                            j’aime les sciences. Bon élève et compétiteur, je suis passionné par l’informatique.</p>
                    </div>
                    <div className={styles.exp}>
                        <h3>EXPÉRIENCES PROFESSIONNELLES</h3>
                        <div className={styles.stage}>
                            <p className={styles['stage-titre']}>Stage dans l&apos;entreprise Instants Botaniques</p>
                            <p className={styles['stage-date']}>Déc 2021 - Janv 2022 (7 semaines)</p>
                            <p><b>Tâche réalisée : </b>Création d&apos;un site web Wordpress pour la marque, ce dernier
                                incluant une boutique, un blog, une carte, etc. <a href="https://instantsbotaniques.com/"
                                    rel="noreferrer" target="_blank">https://instantsbotaniques.com/</a></p>
                        </div>
                        <div className={styles.stage}>
                            <p className={styles['stage-titre']}>Stage dans le Service Informatique de l’IUT de Quimper</p>
                            <p className={styles['stage-date']}>Mai 2021 - Juin 2021 (1mois)</p>
                            <p><b>Tâches réalisées : </b>Assistance des techniciens dans la mise en place de scripts sous
                                Windows,
                                Dépannage et administration du parc informatique de L’IUT, Déploiement du service en ligne
                                ScoDoc.</p>
                        </div>
                        <div className={styles.stage}>
                            <p className={styles['stage-titre']}>Stage au Service Informatique du Conseil Départemental</p>
                            <p className={styles['stage-date']}>Nov. 2019 – Dec. 2019 (1mois)</p>
                            <p><b>Tâches réalisées : </b>Assistance des techniciens dans le câblage des baies de brassage /
                                locaux techniques / data center, administration des routeurs / switchs du parc informatique.
                            </p>
                        </div>
                        <div className={styles.stage}>
                            <p className={styles['stage-titre']}>Stage dans la DSI de la mairie de Quimper</p>
                            <p className={styles['stage-date']}>Juin 2019 - Juillet 2019 (1mois)</p>
                            <p><b>Tâches réalisées : </b>Assistance des techniciens du service dans la gestion du matériel
                                informatique, assistance d’utilisateurs pour des problèmes de logiciels ou de pannes le plus
                                souvent.</p>
                        </div>
                    </div>
                    <div className={styles.comp} ref={hiddenRef}>
                        <h3>COMPÉTENCES</h3>
                        <Jauge titre={"HTML & CSS"} visible={visible} i={"1"} width={"83%"} />
                        <Jauge titre={"JavaScript / React"} visible={visible} i={"2"} width={"75%"} />
                        <Jauge titre={"PHP & SQL"} visible={visible} i={"3"} width={"65%"} />
                        <Jauge titre={"Wordpress"} visible={visible} i={"4"} width={"85%"} />
                        <Jauge titre={"Java"} visible={visible} i={"5"} width={"55%"} />
                    </div>
                </main>
            </div>
            <div className={styles['from-home']}>
                <h3>Réalisations hors cadre scolaire</h3>
                <p className={styles["sous-titre"]}>j’ai placé et détaillé les activités faites en cours dans l’onglet «études» de ce Portfolio</p>
                <div className={styles.activites} >
                    <div className={styles['first-row']} >
                        <div className={styles['activite-texte1']}>
                            <a href="https://r-evan.github.io/Frontend-mentor-1/" target="_blank" rel="noreferrer">https://r-evan.github.io/Frontend-mentor-1/</a>
                            <p>Cette page est un challenge de Frontend mentor que j’ai réalisé, le principe de Frontend mentor est de proposer des
                                challenges de différents niveaux, l’utilisateur en choisit un, récupère les différentes images et couleurs nécessaire à la
                                réalisation du défi, puis code de façon à ce que le rendu soit le plus proche du design original.</p>
                            <p>La difficulté de ce challenge se trouve principalement dans la bar pour choisir le prix de l’abonnement : le prix
                                doit être affiché, doit s’ajuster en cas de changement, et doit prendre en compte les 25% de réduction
                                si le bouton en dessous est coché.</p>
                        </div>
                        <div className={styles['activite-img1']}>
                            <Image src={"/defi1.png"} alt="capture d'écran de mon 1er projet github" layout="fill" className={styles.sioImage} />
                        </div>
                    </div>
                    <div className={styles['second-row']} >
                        <div className={styles['activite-img2']}>
                            <Image src="/defi2.png" alt="capture d'écran de mon 2nd projet github" layout="fill" className={styles.sioImage}  />
                        </div>
                        <div className={styles['activite-texte2']}>
                            <a href="https://r-evan.github.io/Frontend-mentor-2/" target="_blank" rel="noreferrer">https://r-evan.github.io/Frontend-mentot-2/</a>
                            <p>Cette page est aussi un challenge proposé par Frontend mentor, cette fois-ci l’aspect
                                le plus important de la page est le css, il faut aussi réfléchir lors de la mise en
                                place de l’HTML pour ne pas être gêné lors de la mise en place du responsive design.</p>
                            <p>Le menu de navigation sur mobile utilise un peu de javascript pour l&apos;afficher en appuyant sur le bouton
                                et pour cacher le menu si la taille de l’écran repasse au-dessus d’une certaine taille.</p>
                            <p>De même sur les grands écrans j’ai utilisé du javascript pour scinder la page en 2 parties déplaçables,
                                pas vraiment par but esthétique mais plutôt parce que coder cette fonctionnalité m&apos;intéresser.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Script strategy="beforeInteractive" type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
            <Script strategy="beforeInteractive" type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>

        </div>
    );

};


export default Cv;
