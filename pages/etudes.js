import styles from "../styles/etude.module.scss"
import Head from "next/head"
import Container from "../components/Container"
import Section from "../components/Section"


const Etudes = () => {
    return (


        <Container>
            <Head>
                <title>Études - Portfolio Evan Rioual</title>
                <meta name="description" content="Page de présentation de mes études du Portfolio,
                vous y trouverez mon cursus scolaire ainsi que quelques activités réalisées durant">
                </meta>
            </Head>
            <div className={styles.section}>
                <div className={styles.titre}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <h1>Mes Études</h1>
                </div>
            </div>
            <div className={styles["double-section"]} >
                <section>
                    <h2>BTS SIO</h2>
                    <p>
                        Je suis actuellement étudiant en seconde année du
                        BTS SIO (Services Informatiques aux Organisations), spécialité
                        SLAM (Solutions Logicielles et Applications Métier) au sein du Lycée Chaptal.
                    </p><br></br>
                    <p>
                        Passionné d’informatique, j’ai choisi ce cursus afin d’améliorer mes
                        compétences principalement en programmation et dans un second temps en réseau.
                        Ce portfolio développé par moi-même, a été mis en place afin d’y exposer mes
                        deux années d’études, mes compétences ainsi que les différents projets sur
                        lesquels j’ai pu travailler
                    </p>
                </section>
                <section>
                    <p>
                        Le Brevet de Technicien Supérieur Services Informatiques aux Organisations,
                        s’adresse à ceux qui souhaitent se former en deux ans aux métiers d’administrateur
                        réseau ou de développeur. Elle propose deux spécialités:
                    </p><br></br>
                    <p>
                        SISR (Solutions d’infrastructure systèmes et réseaux) Destinée aux étudiants qui
                        s’orientent vers les métiers liés à la conception et la maintenance
                        d’infrastructures réseaux.
                    </p><br></br>
                    <p>
                        SLAM (solutions logicielles et applications métier) Destinée aux étudiants qui
                        s’orientent vers les métiers liés à la conception et la maintenance
                        de programmes applicatifs.
                    </p>
                </section>
            </div>
            <Section>
                <h2>Quelques activités réalisées en 1er année</h2>
                <p className={styles["sous-titre"]}>Les travaux pendant la 1er ont majoritairement étaient réalisés pendant le
                confinement, et donc en autonomie
                </p>
                <section className={styles.row1}>
                    <p>
                        Création de divers scripts linux en bash, l’image ci-contre montre
                        quelques lignes de code d’un script servant à : créer des répertoires,
                        mettre des droits d’accès sur les répertoires, créer des groupes et des
                        utilisateurs s’ils n’existent pas, donner les groupes qui correspond aux utilisateurs
                        et répertoires, Tout cela pour que les nouveaux utilisateurs ne puissent accéder
                        qu’aux répertoires autorisés.
                    </p>
                    <div className={styles["image-container"]} >
                        <img width="100%" heigth="100%" alt="script bash" src="/bash.png" className={styles["sio-image"]}></img>
                    </div>
                </section>
                <section className={styles.row2} >
                    <p>
                        Création de 2 sites web, le premier dans le contexte d’une agence de randonnée
                        en kayak: utilisation d’une base de données SQL pour créer un système de création
                        de compte, d’authentification et de déconnection. les utilisateurs connectés
                        peuvent accéder à un catalogue de kayak. lors de la création du compte le mot de
                        passe n’est pas envoyés « en claire » dans la base de données, il est d’abord hashé.
                    </p>
                    <div className={styles["image-container"]} >
                        <img width="100%" heigth="100%" alt="script php cayak_mor" src="/PHP.png" className={styles["sio-image"]}></img>
                    </div>
                </section>
                <section className={styles.row3}>
                    <p>
                        le second site est similaire au premier, il utilise lui aussi une base de données SQL
                        contenant des descriptions de produits qui sont ensuite affichées dans des catalogues sur le
                        site, la différence avec le premier site est que le second utilise une architecture
                        de code MVC (Model-View-Controller).
                    </p>
                    <div className={styles["image-container"]} >
                        <img width="100%" heigth="100%" alt="capture d'écran page login kayak_mor" className={styles["sio-image"]} src="/kayak.png"></img>
                    </div>
                </section>
            </Section>
            <div className={styles["double-section"]} >
                <section>
                    <h2>BAC PRO SN</h2>
                    <p>
                        J’ai choisi ce bac pro car à l’époque je n’avais pas l’ambition que j’ai aujourd’hui,
                        mais je savais tout de même ce que je ne voulais pas faire,
                        c’est pour cette raison que je me suis orienté vers ce bac.
                    </p><br></br>
                    <p>
                        ce n’est qu’en seconde année de bac pro que j’ai commencé à prendre goût à l’informatique grâce
                        à des amis et certains professeurs, cet à ce moment que j’ai commencé à me former en autonomie.
                    </p>
                </section>
                <section>
                    <p>
                        Le bac professionnel systèmes numériques (SN) forme des techniciens qui interviennent sur les
                        équipements et installations intégrant des technologies numériques. Il propose 3 options :
                    </p><br></br>
                    <p>
                        SSIHT : Alarme, sûreté, sécurité, incendie ; gestion intelligente des bâtiments;
                        domotique liée à la gestion technique de l’habitat.
                    </p><br></br>
                    <p>
                        ARED : audiovisuel multimédia ; électrodomestique;
                        domotique liée au confort et à la gestion des énergies; éclairage et sonorisation.
                    </p><br></br>
                    <p>
                        RISC : télécommunications et réseaux; électronique industrielle et embarquée.
                    </p>
                </section>
            </div>
        </Container>
    );
};

export default Etudes;
