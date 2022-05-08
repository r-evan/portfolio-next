import React from 'react';
import styles from "../styles/stages.module.scss"
import Link from 'next/link'
import Head from 'next/head'


const Stages = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Stages - Portfolio Evan Rioual</title>
                <meta name="description" content="Page de présentation de mes différents stages,
                et de certaine activités durant">
                </meta>
            </Head>
            <div className={styles.section}>
                <div className={styles.titre}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <h1>Mes Stages</h1>
                </div>
            </div>
            <div className={styles.paras}>
                <h2>Effectué pendant le BTS :</h2>
                <div className={styles["para"]} >
                    <section>
                        <h3>Stage du 25 Mai au 25 Juin 2021 à l&apos;IUT de Quimper</h3>
                        <div className={styles["image-container"]}>
                            <img heigth="100%" width="100%" alt="logo iut quimper" src="/logo-iut.png" className={styles["image"]}  ></img>
                        </div>
                        <p>
                            Le stage a durée 5 semaines, il m’a permis de m’améliorer dans plusieurs domaines car
                            étant donné qu’il n’y avait pas d&apos;autres services liés l&apos;informatique, tout les
                            problèmes liés à ce dernier c’est à dire, tout ce qui concerne le parc informatique
                            (plus de 1500 élèves et professeurs pour un total de plus de 600 ordinateurs) y compris
                            la mise en place de visioconférence et le dépannage d’imprimante est sous la charge du
                            service dans lequel j’étais en stage.
                        </p><br></br>
                        <p>
                            <Link href="/iut-note-de-synthese.pdf" ><a target="_blank">Voir la note de synthèse, </a></Link>
                            la note de synthèse n’est pas un rapport de stage mais elle reste tout de même
                            très similaire à ce dernier.
                        </p>
                    </section>
                    <section>
                        <h3>Quelques activités réalisées :</h3>
                        <p>
                            Mise en place de l’outil en ligne ScoDoc, d’abord testé en locale sur une machine virtuel Debian 10
                            sans soucis mise à part un problème avec le DNS réglé en allant modifier son fichier.
                            Puis mise en place avec putty sur un serveur de l’UBO avec cette fois-ci un problème de certificat
                            réglé en le créant sans l’assistance de ScoDoc.
                        </p><br></br>
                        <p>
                            Création d’un site web dans le but de mettre en avant le service informatique, au final le
                            site n’a pas pu être terminé mais il m’à tout de même servi à tester et mettre en place certaine
                            fonctionnalité JavaScript.
                        </p><br></br>
                        <p>
                            Déploiement d’images Windows 10 grâce à FOG.
                        </p><br></br>
                        <p>
                            Utilisation d’Active Directory pour mettre en place le lancement automatique de
                            scripts au démarrage des postes.
                        </p>
                    </section>
                </div>
            </div>
            <div className={styles.paras}>
                <h2>Stage de BAC SN</h2>
                <div className={styles["para"]} >
                    <section>
                        <h3>Dans le conseil départemental de Novembre à Décembre 2019</h3>
                        <div className={styles["image-container"]}>
                            <img heigth="100%" width="100%" alt="logo conseil général finistère" src="/logo-conseil-g.png" className={styles["image"]}  ></img>
                        </div>
                        <p>
                            Stage de 4 semaines dans le service informatique du conseil départemental, la structure du réseau des nombreux
                            bâtiment public nécessite plus d’un service pour être prise en charge, c’est dans ce contexte que
                            mon stage c’est passé dans le service prenant en charge le câblage du réseau et son dépannage, cet à
                            dire raccordement de local technique au data center ou à une baie informatique, dépannage grâce à des testeurs
                            pour vérifier le fonctionnement de câble, mise en place de switch dans des baies informatiques.
                        </p>
                    </section>
                    <section>
                        <h3>Dans la DSI de la mairie de Quimper de Juin à Juillet 2019</h3>
                        <div className={styles["image-container"]}>
                            <img heigth="100%" width="100%" alt="logo ville de quimper" src="/logo-ville-quimper_horizontal.png" className={styles["image"]} ></img>
                        </div>
                        <p>
                            Stage de 5 semaines dans la direction des systèmes d’information, le service s’occupe principalement des interventions en cas
                            de panne de réseau, ou de divers problèmes toujours liés à l’informatique, il s’occupe aussi un peu de
                            la gestion des utilisateurs grâce à Active Directory et GLPI, j’ai donc suivi le quotidien des
                            techniciens en les assistants dans leurs tâches.
                        </p>
                    </section>
                </div>
            </div >
        </div >
    );
};

export default Stages;
