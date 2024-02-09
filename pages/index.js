import Head from "next/head";
import styles from "../styles/index.module.scss";
import BlocNav from "../components/BlocNav";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Accueil - Portfolio Evan Rioual</title>
        <meta
          name="description"
          content="Page d'accueil de mon Portfolio,
          vous y trouverez un menu sommaire des différentes sections du site"
        ></meta>
      </Head>

      <section className={styles.section}>
        <div className={styles["message-accueil"]}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <h1>Bienvenue sur mon Portfolio</h1>
          <p>
            Ce site a pour but de vous présenter les compétences ainsi que les
            savoirs acquis au cours de mes formations et expériences
            professionnelles.
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.categories}>
          <div className={styles["bloc-titre"]}>
            <h2>Ce Portfolio est séparé en plusieurs catégories :</h2>
          </div>
          <BlocNav lien={"/cv"}>
            <h3>CV & Travaux</h3>
            <p>
              Met en avant mon CV mais aussi quelques projets personnels
              réalisés.
            </p>
          </BlocNav>
          <BlocNav lien={"/stages"}>
            <h3>Alternances / Stages</h3>
            <p>Présente mes différentes expériences professionnelles.</p>
          </BlocNav>
          <BlocNav lien={"/veille-informationnelle"}>
            <h3>Veille informationnelle</h3>
            <p>Résultat de ma veille informationnelle réalisée en BTS.</p>
          </BlocNav>
          <BlocNav lien={"/etudes"}>
            <h3>Études</h3>
            <p>
              Présente plus en détails mon cursus scolaire et quelques activités
              réalisées pendant.
            </p>
          </BlocNav>
          <BlocNav lien={"/fiche-de-competence"}>
            <h3>Fiche de compétences</h3>
            <p>
              Présentation de la fiche de compétence du BTS SIO et des activités
              faites pour valider les compétences de cette dernière
            </p>
          </BlocNav>
        </div>
      </section>
    </div>
  );
};

export default Home;
