import styles from "../styles/cv.module.scss";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Etudes from "./etudes";
import CvContent from "../components/cv-content";
import { useRef, useState } from "react/cjs/react.development";

const Cv = () => {

  const [visible, setVisible] = useState(false);
    const container = useRef(null);
    const hiddenRef = useRef(null);
    const scrollHandler = () => {
      if (window.innerHeight + container.current.scrollTop >= 1450)
        setVisible(true);
    };

  return (
    <div className={styles.container} onScroll={scrollHandler} ref={container}>
      <Head>
        <title>Evan Rioual - Développeur informatique</title>
        <meta
          name="description"
          content="Bonjour, je m'appelle Evan, développeur informatique.
          Les projets que vous trouverez sur cette page de mon portfolio sont principalement personnels"
        ></meta>
      </Head>

      <section className={styles.section}>
        <div className={styles.titre}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <h1>Evan Rioual</h1>
        </div>
      </section>

      <CvContent visible={visible} hiddenRef={hiddenRef}  />

      <div className={styles["from-home"]} id="realisations">
        <h3>Réalisations hors cadre scolaire</h3>
        <p className={styles["sous-titre"]}>
          j’ai placé et détaillé les activités faites en cours dans l’onglet
          «études» de ce Portfolio
        </p>
        <div className={styles.activites}>
          <div className={styles["second-row"]}>
            <div className={styles["activite-img2"]}>
              <Image
                src="/Multi-step-preview.png"
                alt="capture de mon dernier projet"
                layout="fill"
                className={styles.sioImage}
              />
            </div>
            <div className={styles["activite-texte2"]}>
              <p>
                Code :
                <a
                  href="https://github.com/r-evan/Multi-Step-Form"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/r-evan/Multi-Step-Form
                </a>
              </p>
              <p>
                Preview :
                <a
                  href="https://multo-step-form-evan-rioual.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://multi-step-form-evan-rioual.vercel.app/
                </a>
              </p>

              <p>
                Défi proposé par frontend mentor, réalisé en juin 2023, le
                challenge à une difficulté noté 4/5, tout comme pour le projet
                précédent, sans une bonne analyse de la maquette, que ce soit au
                niveau du design ou au niveau de la logique du formulaire, du
                temps peut vite être perdu...
              </p>
              <p>
                Par exemple, j'ai passé 2h à essayer de rendre cohérente ma
                barre de navigation, car son contenu évolue selon l'avancée dans
                le formulaire, mon bouton "suivant" appelle une fonction qui
                vérifie les données à la première étape et pour finir la barre
                se situe à un endroit différent sur mobile.{" "}
              </p>
              <p>
                En définitive, à part quelques soucis, la réalisation du projet
                s'est bien passé, encore une fois l'utilisation de React à
                grandement aidé à l'avancement du projet.{" "}
              </p>
            </div>
          </div>

          <div className={styles["first-row"]}>
            <div className={styles["activite-texte1"]}>
              <p>
                Preview :
                <a
                  href="https://react-countries-api-one.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://react-countries-api-one.vercel.app/
                </a>
              </p>
              <p>
                Code :
                <a
                  href="https://github.com/r-evan/React-countries-API/tree/main/src"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/r-evan/React-countries-API/tree/main/src
                </a>
              </p>
              <p>
                Mon troisième challenge proposé par Frontend mentor, réalisé en
                août 2022, ce challenge a une difficulté noté 4/5 (avanced), et
                en effet il y a plusieurs éléments qui rendent ce défi complexe
                à intégrer comme :
              </p>
              <p>
                Le système de navigation de l&apos;application qui est basé sur
                le résultat de l&apos;API, autrement dit, après avoir récupéré
                les données de l&apos;API, les informations s&apos;affichent sur
                la page, et pour chaque pays un lien va être créé vers une page
                générée dynamiquement servant à avoir plus d&apos;informations
                sur ce dernier
              </p>
              <p>
                La page d&apos;informations complémentaires affiche aussi les
                pays voisins, clicker sur l&apos;un des pays voisins amène sur
                sa page d&apos;info, cette fonctionnalité a été la plus dure à
                mettre en place car par rapport à la structure des données que
                retourne l&apos;API, j&apos;ai dû mettre en relation, coordonner
                plusieurs informations se trouvant à des emplacements différents
                (la difficulté est donc plutôt sur le plan logique)
              </p>
              <p>
                Un mode sombre et un système de filtrage son également
                implémenté.
              </p>
              <p>
                Pour conclure, le choix de la technologie utilisé à eux un
                impact majeur, sans l&apos;aide de React js, je pense que le
                projet aurait été bien plus difficile encore.
              </p>
            </div>
            <div className={styles["activite-img1"]}>
              <Image
                src={"/defi3.png"}
                alt="capture d'écran de mon 3eme projet github"
                layout="fill"
                className={styles.sioImage}
              />
            </div>
          </div>

          <div className={styles["second-row"]}>
            <div className={styles["activite-img2"]}>
              <Image
                src="/defi2.png"
                alt="capture d'écran de mon 2nd projet github"
                layout="fill"
                className={styles.sioImage}
              />
            </div>
            <div className={styles["activite-texte2"]}>
              <a
                href="https://r-evan.github.io/Frontend-mentor-2/"
                target="_blank"
                rel="noreferrer"
              >
                https://r-evan.github.io/Frontend-mentot-2/
              </a>
              <p>
                Cette page est le second challenge de Frontend mentor que
                j&apos;ai fait (difficulté 2/5), cette fois-ci l’aspect le plus
                important de la page est le css, il faut aussi réfléchir lors de
                la mise en place de l’HTML pour ne pas être gêné lors de la mise
                en place du responsive design.
              </p>
              <p>
                Le menu de navigation sur mobile utilise un peu de javascript,
                pour que le bouton s'affiche selon la taille de l'écran.
              </p>
              <p>
                De même sur les grands écrans j&apos;ai utilisé du javascript
                pour scinder la page en 2 parties déplaçables, pas vraiment par
                but esthétique mais plutôt parce que coder cette fonctionnalité
                m&apos;intéresser.
              </p>
            </div>
          </div>
          <div className={styles["first-row"]}>
            <div className={styles["activite-texte1"]}>
              <a
                href="https://r-evan.github.io/Frentend-mentor-1/"
                target="_blank"
                rel="noreferrer"
              >
                https://r-evan.github.io/Frontend-mentor-1/
              </a>
              <p>
                Cette page est le premier challenge de Frontend mentor que j’ai
                réalisé (difficulté 2/5), le principe de Frontend mentor est de
                proposer des challenges de différents niveaux, l’utilisateur en
                choisit un, récupère les différentes images et couleurs
                nécessaires à la réalisation du défi, puis code de façon à ce
                que le rendu soit le plus proche du design original.
              </p>
              <p>
                La difficulté de ce challenge se trouve principalement dans la
                barre pour choisir le prix de l’abonnement : le prix doit être
                affiché, doit s’ajuster en cas de changement, et doit prendre en
                compte les 25% de réduction si le bouton en dessous est coché.
              </p>
            </div>
            <div className={styles["activite-img1"]}>
              <Image
                src={"/defi1.png"}
                alt="capture d'écran de mon 1er projet github"
                layout="fill"
                className={styles.sioImage}
              />
            </div>
          </div>
        </div>
      </div>

      <Etudes/>

      
    </div>
  );
};

export default Cv;
