import Link from 'next/link'
import styles from '../styles/ficheComp.module.scss'
import LC from '../components/LinkComp';
import Accordeon from "../components/Accordeon";
import Para from "../components/Paragraphe";
import Head from 'next/head'
import Container from '../components/Container';
import Image from 'next/image';

const FicheDeCompetences = () => {

    return (
        <Container>
            <Head>
                <title>Fiche de compétence - Portfolio Evan Rioual</title>
                <meta name="description" content="Page de validation des compétences du BTS SIO,
                vous y trouverez les ressources pour justifier les compétences utilisées">
                </meta>
            </Head>
            <div className={styles.section}>
                <div className={styles.titre}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <h1>Fiche de compétences</h1>
                </div>
            </div>
            <Para>
                <p>
                    Durant mes deux années de BTS SIO j’ai réalisé un grand nombre d’activités que ce soit en stage, en cours ou
                    de mon côté, le principe de l’épreuve E4 et de mettre en avant les savoirs acquis à travers les activités à
                    partir d’une grille de compétences.
                </p><br></br>
                <Link href={"/fiche-de-comp.png"}>
                    <a href='/fiche-de-comp.png' target='_blank'>
                        <div style={{ width: '100%', minHeight: '200px', height: "40vw", position: 'relative' }}>
                            <Image src={"/fiche-de-comp.png"} alt="Picture of the author" layout="fill" />
                        </div><br></br>
                    </a>
                </Link>
                <p>
                    Tous les textes en <a href='#'>orange </a>sont des liens menant aux éléments de preuve.
                </p>
                <p>
                    <LC lien={"/competences/Evan-tableau-synthese.ods"}>Lien du fichier excel de mon portefeuille de compétences. </LC>
                </p><br></br>
                <p>
                    Je vais à present ci-dessous apporter des éléments de «preuve» aux différentes activités que j’ai réalisées.

                </p>
            </Para>
            <Para>
                <h3>Activités réalisées pendant les deux années de BTS SIO</h3>
                <Accordeon titre={"Mise en place d'une veille informationnelle"}>
                    <p>
                        Compétences mises en œuvre : 1.6.1 / 1.6.2
                    </p>
                    <p>
                        Comme on peut le voir dans l’onglet <Link href={"/veille-informationnelle"}>veille informationnelle</Link>, j’ai utilisé plusieurs outils pour faire ma veille ce qui valide les compétences 1.6.1 et 1.6.2.
                        <br></br>Mon environnement d’apprentissage personnel ne se limite heureusement pas qu’à ma veille informationnelle,
                        généralement j’utilise des documentations, des articles ou je regarde des tutoriels sur YouTube.
                    </p>
                </Accordeon>
                <Accordeon titre={"Création de projets pour apprendre différents FrameWork"}>
                    <p>
                        Compétences mises en œuvre : 1.1.2 / 1.6.3 / 1.6.4
                    </p>
                    <p>
                        1.1.2 : Naturellement quand je code je respect des <LC lien={"/competences/norme.png"}>normes d’écriture</LC> et des conventions de nommage, dans le normes d’écriture par exemple j’utilise le camel Case,
                        le Pascal Case ou encore le kebab-case en CSS, et dans les conventions de nommage par exemple en TypeScript mettre un &apos;I&apos; devant les noms utilisés pour les interfaces.
                    </p>
                    <p>
                        1.6.3 / 1.6.4 : D’une certaine façon le fait de faire ces projets et de <LC lien={"/competences/github.png"}>partager certains d’entre eux sur Github</LC> construit mon identité professionnelle.
                    </p>
                </Accordeon>
                <Accordeon titre={"Création d'une application de gestion de frais en cours"}>
                    <p>
                        Compétences mises en œuvre : 1.1.2 / 1.1.3 / 1.4.2 / 1.5.1
                    </p>
                    <p>
                        1.1.2 : De la même manière que pour la section au dessus j’ai utilisé dans le projet des normes d’écriture, mais j&apos;ai aussi
                        utilisé l&apos;architecture MVC <LC lien={"/competences/preuve-mvc.png"}> l&apos;architecture MVC</LC>
                    </p>
                    <p>
                        1.1.3 : Dans le cadre du projet un nouveau compte sur PhpMyadmin a été créé, ce compte n’a accès qu’au strict minimum dans la base de données et c’est ce dernier qui est utiliser pour récupérer les données.
                    </p>
                    <p>
                        1.4.2 : J’ai utilisé la platform Tuleap campus pour<LC lien={"/competences/tuleap.png"}> planifier, visualiser, répartir les tâches</LC> à faires.
                    </p>
                    <p>
                        1.5.1 : Différents tests ont été effectués sur l’application pour trouver des bugs,
                        j’ai aussi utilisé le <LC lien={"/competences/w3c.png"}>validateur de code HTML de la W3C</LC> comme on le voit sur l’image de l’interface de Tuleap de la compétence 1.4.2.
                    </p>
                </Accordeon>
                <Accordeon titre={"Suivi d'un ticket GLPI"}>
                    <p>
                        Compétences mises en œuvre : 1.2.3 / 1.2.1
                    </p>
                    <p>
                        1.2.1 / 1.2.3 : J’ai utilisé l’outil GLPI pour traiter une demande d’assistance applicative,
                        un projet devais être mise en ligne mais comme on peux le voir il y a eu <LC lien={"/competences/glpi.png"}>quelques soucis</LC>.
                    </p>
                </Accordeon>
            </Para>
            <Para>
                <h3>Activités faites durant le stage à l&apos;iut de quimper</h3>
                <Accordeon titre={"Mettre à jour l'heure de tout les postes du domaine"} >
                    <p>
                        Compétences mise en œuvre : 1.1.1 / 1.2.2
                    </p>
                    <p>
                        Ma <LC lien={"/competences/note-de-synthese.pdf"}>note de synthèse</LC> portant
                        sur cette tâche, elle est un élément de preuve suffisant.
                    </p>
                </Accordeon>
                <Accordeon titre={"Déploiement du service web Scodoc"}>
                    <p>Compétences mises en œuvre : 1.1.3 / 1.2.2 / 1.5.2 / 1.5.3</p>
                    <p>j’ai 2 éléments de preuve : l’image d’une <LC lien={"/competences/preuve-scodoc.png"}>conversation par mail</LC> sur laquelle on
                        voit mon tuteur de stage faisant un petit rapport de la situation. Et une
                        <LC lien={"/competences/preuve-scodoc2.png"}> image du service</LC> une fois en ligne
                    </p>
                    <p>
                        D’abord sur une machine virtuelle local, puis sur une machine virtuelle hébergée sur les serveurs de l’UBO à Brest sur laquelle
                        je me suis connecté en SSH, j’ai mis en place le service web Scodoc, cet un outil qui permet de gérer les élèves
                        attribués, il y a un système d’authentification permettant de se connecter et il y a plusieurs niveaux d’habilitation,
                        j’ai fait des tests par rapport à ceux-ci, ce qui valide la compétence 1.1.3,
                        et la compétence 1.5.3 car j’ai réalisé une fiche d’aide pour guider les utilisateurs dans l’outil,
                        les 2 autres compétences sont validées par la mission en elle-même.
                    </p>
                </Accordeon><br></br>
                <p>
                    Pendant ce stage j’ai réalisé bien d’autres activités, cependant je manque de support, de plus il n’y a pas
                    beaucoup plus de compétences validées par ces derniers
                </p>
            </Para>



            <Para>
                <h3>Activités faites durant le stage chez Instants Botaniques</h3>
                <Accordeon titre={"Création d'un site web WordPress / Woocommerce pour la marque"}>
                    <p>
                        Compétences mises en œuvre : 1.1.2 / 1.1.3 / 1.1.5 / 1.2.3 / 1.3.1 / 1.3.2 / 1.3.3 / 1.4.2 / 1.5.2 / 1.5.3
                    </p>
                    <p>
                        lien du site : <a href="https://instantsbotaniques.com/" rel="noreferrer" target="_blank">https://instantsbotaniques.com/</a>
                    </p>
                    <p>
                        La création du site était la mission principale du stage et elle m’a pris beaucoup de temps dû au grand nombre de fonctionnalités demandées.
                        <br></br>1.1.2 : pour ajouter des classes CSS à certains éléments j’ai utilisé la convention de nommage kebab-case comme on peut le voir sur
                        <LC lien={"/competences/kebab-case.png"}> ce lien</LC>,
                        <br></br>1.1.3: WordPress intègre par défaut plusieurs niveaux d’accès (administrateur, utilisateur, rédacteur…), donc j’ai pu tester tout au long de la création du site les différents droits.
                        <br></br>1.1.5 : sur le site j’ai installé le plugin Sauvegarde UpdraftPlus pour <LC lien={"/competences/sauvegarde.png"}>gérer les sauvegardes</LC>, ces dernières sont manuelles mais ce n’est pas plus mal ainsi car une fois en ligne
                        les modifications sont rares, si l’interface d’administration du site est pour une quelconque raison inaccessible, on peut utiliser un client FTP pour récupérer les sauvegardes.
                    </p>
                    <p>
                        1.3.X : pour m’aider dans ma tâche j’ai utilisé un <LC lien={"/competences/Reco_PlanMarketing_IB-3-1.pdf"}>plan de recommandation marketing</LC>, de par sa richesse d’information il m’a été très utile,
                        je considère que pour les compétences 1.3.X ainsi que pour la 1.2.3 et la 1.5.2, le site en lui-même est un élément de preuve ( on peut voir mon nom au bas de la page ).
                    </p>
                    <p>
                        1.4.2 : chaque semaine avec ma tutrice de stage je faisais le point sur les <LC lien={"/competences/activites.pdf"}>choses à faires</LC>.
                    </p>
                    <p>
                        1.5.3 : Ma tutrice de stage ne connaissant pas les différents plugins que j’ai utilisés, j’ai créé<LC lien={"/competences/aide.png"}> différentes fiches d’aide</LC>.
                    </p>
                </Accordeon>
                <Accordeon titre={"Sur Gmail envoyer et recevoir des mails crées avec une autre adresse mail Gandi"}>
                    <p>
                        Compétences mises en œuvre : 1.2.2 / 1.5.3
                    </p>
                    <p>
                        Ma tutrice de stage ne savait pas comment faire pour que dans Gmail elle et d’autres stagiaires puissent envoyer des mails avec une seconde adresse email professionnelle,
                        j’ai donc fait quelques recherches et ensuite crée un <LC lien={"/competences/redirection-mail.pdf"}>document tutoriel</LC> pour qu’ils puissent le faire eux-mêmes.
                    </p>
                </Accordeon>
            </Para>

        </Container>
    );
};

export default FicheDeCompetences;