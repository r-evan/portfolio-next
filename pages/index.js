import Head from 'next/head'
import styles from '../styles/index.module.scss'
import BlocNav from '../components/BlocNav'

const Home = () => {

  return (

    <div className={styles.container}>
      <Head>
        <title>Accueil - Portfolio Evan Rioual</title>
        <meta name="description" content="Page d'accueil de mon Portfolio,
          vous y trouverez un menu sommaire des différentes sections du site">
        </meta>
      </Head>

      <section className={styles.section}>
        <div className={styles['message-accueil']}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <h1>Bienvenue sur mon Portfolio</h1>
          <p>Ce site a pour but de vous présenter les compétences ainsi que les savoirs
            acquis au cours de mes formations et expériences professionnelles.</p>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.categories}>
          <div className={styles["bloc-titre"]}>
            <h2>Ce Portfolio est séparé en plusieurs catégories :</h2>
          </div>
          <BlocNav lien={"/stages"}>
            <h3>Stages</h3>
            <p>Présente les différents stages que j’ai effectués</p>
          </BlocNav>
          <BlocNav lien={"/veille-informationnelle"}>
            <h3>Veille informationnelle</h3>
            <p>Partage du condensé de mes veilles informationnelles.</p>
          </BlocNav>
          <BlocNav lien={"/etudes"}>
            <h3>Études</h3>
            <p>Présente plus en détails mon cursus scolaire cet à dire,
              expliquer les formations et quelques activités réalisées durant. </p>
          </BlocNav>
          <BlocNav lien={"/cv"}>
            <h3>CV</h3>
            <p>Met en avant mon CV mais aussi certains projets réalisés en cours ou en autonomie.</p>
          </BlocNav>
          <BlocNav lien={"/fiche-de-competence"}>
            <h3>Fiche de compétences</h3>
            <p>Montre la fiche de compétence du BTS SIO et les activités que j&apos;ai
              faites pour valider les compétences de cette dernière
            </p>
          </BlocNav>
        </div>
      </section>
    </div>
  )
}

export default Home;
