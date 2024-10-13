import React from 'react';
import { useState } from 'react';
import { useRef } from 'react/cjs/react.development';
import Jauge from './Jauge';
import Image from 'next/image';
import styles from "../styles/cv.module.scss";
import Script from 'next/script';

const CvContent = ({visible, hiddenRef}) => {
    
    return (
        <div className={styles.cv} id="cv" >
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
              <div className={styles.icon}>
                <ion-icon name="car-outline"></ion-icon>
                <p>Permis B - véhiculé</p>
              </div>
            </div>
            <div className={`${styles.block} ${styles.form}`}>
              <h3>FORMATION</h3>
              <p>Concepteur développeur</p>
              <p>d'applications (CDA)</p>
              <p>ENI Quimper 2022 - 2024</p>
              <p>Diplôme obtenu</p>
              <br></br>
  
              <p>BTS SIO (option SLAM)</p>
              <p>Lycée Chaptal 2020 - 2022</p>
              <p>Diplôme obtenu (avec 14.31)</p>
              <br></br>
  
              <p>BAC PRO SN (option RISC)</p>
              <p>Lycée Yves Thépot</p>
              <p>Mention au bac : bien</p>
            </div>
            <div className={styles.block}>
              <h3>LANGUES</h3>
              <p>Anglais : Niveau B2</p>
              <p>Français</p>
            </div>
  
            <div className={styles.block}>
              <h3>GITHUB</h3>
              <a
                href="https://github.com/r-evan"
                rel="noreferrer"
                target="_blank"
              >
                https://github.com/r-evan
              </a>
            </div>
            <div className={styles.block}>
              <h3>PASSIONS</h3>
              <div className={styles.passions}>
                <div className={styles.muscuContainer}>
                  <Image src={"/muscu.png"} alt="test" layout="fill" />
                </div>
                <div className={styles.hackerContainer}>
                  <Image
                    src={"/hacker.png"}
                    alt="test"
                    layout="fill"
                    className={styles.hacker}
                  />
                </div>
                <div className={styles.pianoContainer}>
                  <Image
                    src={"/piano.png"}
                    alt="test"
                    layout="fill"
                    className={styles.piano}
                  />
                </div>
              </div>
            </div>
          </aside>
          <main className={styles.main}>
            <div className={styles.profil}>
              <h3>
                CONCEPTEUR DÉVELOPPEUR D&apos;APPLICATIONS, EN RECHERCHE
                D&apos;ALTERNANCE
              </h3>
              <p>
              Titulaire d&apos;un diplôme de Concepteur Développeur d&apos;Applications (BAC+4), 
              je suis à la recherche d&apos;une nouvelle opportunité d&apos;alternance d&apos;un an afin
               de continuer vers la formation Manager de Solutions Digitales et Data
                (niveau BAC+5) de l&apos;ENI.
              </p>
            </div>
            <div className={styles.exp}>
              <h3>EXPÉRIENCES PROFESSIONNELLES</h3>
              <div className={styles.stage}>
                <p className={styles["stage-titre"]}>
                  Alternance chez CGI en tant qu&apos;Analyste Développeur
                </p>
                <p className={styles["stage-date"]}>Octobre 2023 - octobre 2024</p>
                <p>
                Je contribue à la correction et au développement de nouvelles fonctionnalités 
                sur l&apos;ERP Oracle E-Business Suite (OEBS) d&apos;un client, en utilisant principalement 
                des outils tels qu&apos;APEX, SQL Developer et Talend.
                </p>
              </div>
              <div className={styles.stage}>
                <p className={styles["stage-titre"]}>
                  Alternance au service informatique d&apos;Océalliance
                </p>
                <p className={styles["stage-date"]}>
                  Décembre 2022 - septembre 2023 (10 mois)
                </p>
                <p>
                Conception de services et d&apos;outils de gestion en Windev, tels que la
                modification des utilisateurs ou la gestion des bons de livraison.
                </p>
              </div>
              <div className={styles.stage}>
                <p className={styles["stage-titre"]}>
                  Stage dans l&apos;entreprise Instants Botaniques
                </p>
                <p className={styles["stage-date"]}>
                    Décembre 2021 - janvier 2022 (7 semaines)
                </p>
                <p>
                Création d&apos;un site d&apos;E-commerce Wordpress pour l&apos;entreprise, ce
                dernier incluant en plus un blog et une carte des lieux de vente.
                </p>
              </div>
              <div className={styles.stage}>
                <p className={styles["stage-titre"]}>
                  Stage dans le Service Informatique de l&apos;IUT de Quimper
                </p>
                <p className={styles["stage-date"]}>
                  Mai 2021 - juin 2021 (1 mois)
                </p>
                <p>
                Assistance des techniciens dans la mise en place de scripts sous
                Windows, Dépannage et administration du parc informatique de
                L&apos;IUT, Déploiement du service en ligne ScoDoc
                </p>
              </div>
              <div className={styles.stage}>
                <p className={styles["stage-titre"]}>
                  Stage au Service Informatique du Conseil Départemental
                </p>
                <p className={styles["stage-date"]}>
                  Novembre 2019 – décembre 2019 (1 mois)
                </p>
                <p>
                Assistance des techniciens dans le câblage des baies de brassage
                et des locaux techniques, ainsi que l'administration des routeurs et
                switchs du parc informatique.
                </p>
              </div>
              {/* <div className={styles.stage}>
                              <p className={styles['stage-titre']}>Stage dans la DSI de la mairie de Quimper</p>
                              <p className={styles['stage-date']}>Juin 2019 - Juillet 2019 (1mois)</p>
                              <p><b>Tâches réalisées : </b>Assistance des techniciens du service dans la gestion du matériel
                                  informatique, assistance d’utilisateurs pour des problèmes de logiciels ou de pannes le plus
                                  souvent.</p>
                          </div> */}
            </div>
            <div className={styles.comp} ref={hiddenRef}>
              <h3>COMPÉTENCES</h3>
              <Jauge
                titre={"JavaScript / React"}
                visible={visible}
                i={"1"}
                width={"50%"}
              />
              <Jauge titre={"PL SQL"} visible={visible} i={"2"} width={"60%"} />
              <Jauge
                titre={"PHP / Symphony"}
                visible={visible}
                i={"3"}
                width={"40%"}
              />
              <Jauge titre={"Windev"} visible={visible} i={"4"} width={"35%"} />
              <Jauge
                titre={"Java EE"}
                visible={visible}
                i={"5"}
                width={"30%"}
              />
              <Jauge
                titre={"HTML / CSS"}
                visible={visible}
                i={"6"}
                width={"75%"}
              />
            </div>
          </main>
          
        <Script
            strategy="beforeInteractive"
            type="module"
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></Script>
        <Script
            strategy="beforeInteractive"
            type="module"
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></Script>

   

        </div>
      );
    };
    
export default CvContent;