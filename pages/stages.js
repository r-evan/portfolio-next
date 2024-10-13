import React from 'react';
import styles from "../styles/stages.module.scss"
import Link from 'next/link'
import Head from 'next/head'
import Container from '../components/Container';
import Image from 'next/image';


const Stages = () => {
    return (
        <Container>
            <Head>
                <title>Alternances - Portfolio Evan Rioual</title>
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
                    <h2>Alternance</h2>
                </div>
            </div>
            <div className={styles.paras}>
                <h2>Effectué pendant le BTS :</h2>
                <div className={styles["para"]} >
                    <section>
                        <h3>Stage du 6 Décembre au 28 janvier 2022 à Instants Botaniques</h3>
                        <div className={styles["image-container"]}>
                            <Image alt="logo iut quimper" src="/ib.jpg" layout="fill" className={styles["image"]} />

                        </div>
                        <p>
                            Instants Botaniques est une jeune marque de thé, le stage a durée 7 semaines
                            durant lesquelles j&apos;ai travaillé en tant que développeur web, ce stage a été important pour la marque car la boutique
                            en ligne était à refaire d&apos;urgence, c&apos;est durant ce stage que j&apos;ai le plus appris car
                            j&apos;ai dû mener le projet de bout en bout
                        </p><br></br>
                        <p>
                            <Link href="/note de synthèse-IB.pdf" ><a target="_blank">Voir la note de synthèse, </a></Link>
                            la note de synthèse n’est pas un rapport de stage mais elle reste tout de même
                            très similaire à ce dernier.
                        </p>
                    </section>
                    <section>
                        <h3>Quelques activités réalisées :</h3>
                        <p>
                            Création d&apos;un nouveau site Wordpress / Woocommerce sur demande, à partir des données de l&apos;ancien site sur prestashop,
                            en 2 mois de stage j&apos;ai eu de nombreuses demandes concernant l&apos;esthétique de la boutique,
                            j&apos;ai donc été contraint d&apos;ajouter beaucoup de css, des hooks woocommerce et du JavaScript,
                            mais j&apos;ai aussi eu à modifier la base de données et gérer les sauvegardes faites du site.
                        </p><br></br>
                        <p>
                            Déploiement du site sur un hébergeur gratuit dans un premier temps (planet hoster) puis
                            sur OVH une fois l&apos;application web entièrement realisé.
                        </p><br></br>
                        <p>
                            Aide aux liaisons des adresses mails professionnelles Ghandi avec des adresses Gmail, pour envoyer et recevoir
                            sur la boite Gmail les mails professionnelles.
                        </p><br></br>

                    </section>
                </div>

                <div className={styles["para"]} >
                    <section>
                        <h3>Stage du 25 Mai au 25 Juin 2021 à l&apos;IUT de Quimper</h3>
                        <div className={styles["image-container"]}>
                            <Image alt="logo iut quimper" src="/logo-iut.png" layout="fill" className={styles["image"]} />

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
                            <Link href="/iut-note-de-synthese.pdf" ><a target="_blank">Note de synthèse</a></Link>
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
                            <Image alt="logo conseil général finistère" src="/logo-conseil-g.png" layout="fill" className={styles["image"]} />

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
                            <Image alt="logo ville de quimper" src="/logo-ville-quimper_horizontal.png" layout="fill" className={styles["image"]} />

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
        </Container>
    );
};

export default Stages;
