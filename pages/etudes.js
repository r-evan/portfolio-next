import styles from "../styles/etude.module.scss";
import Head from "next/head";
import Container from "../components/Container";
import Section from "../components/Section";
import Image from "next/image";

const Etudes = () => {
  return (
    <Container>
      <Head>
        <title>Études - Portfolio Evan Rioual</title>
        <meta
          name="description"
          content="Page de présentation de mes études du Portfolio,
                vous y trouverez mon cursus scolaire ainsi que quelques activités réalisées durant"
        ></meta>
      </Head>
      <div className={styles.section}>
        <div className={styles.titre}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <h2>Mes Études</h2>
        </div>
      </div>
      <div className={styles["double-section"]}>
        <section>
          <h2>Alternance CDA à l'ENI</h2>
          <p>
            J'ai récemment obtenu mon diplôme de Concepteur Développeur d'Applications (BAC+4) après deux années 
            d'alternance à l'ENI, dans le cadre de leur formation CDA à Quimper.
          </p>
          <br />
          <p>
            Cette formation était pour moi la suite logique de mon BTS SIO. 
            À part l'ENI, j'aurais pu m'orienter vers une licence CDA à Brest, 
            mais l'expérience à gagner en entreprise a déterminé mon choix.
          </p>
          <br />
          <p>
            L'entreprise dans laquelle j'effectue mon alternance est CGI, l'un des leaders mondiaux dans le 
            domaine des services-conseils en technologie de l'information. Au sein de CGI, ma mission consiste 
            à réaliser des évolutions et des correctifs sur l'ERP Oracle EBS d'un client. Les principaux outils que 
            j'utilise sont SQL Developer, Talend, APEX et PuTTY.
          </p>
        </section>
        <section>
          <p>Voici un résumé de ce que j'ai appris en cours :</p>
          <br />
          <p>
            <ul>
              <li> - Le langage SQL puis PL SQL</li>
              <li> - Le développement en couches avec Java SE </li>
              <li> - Le développement BackEnd avec Java EE</li>
              <li> - Projet : Développement d’une app Java EE</li>
              <li> - Le développement Frontend avec Javascript</li>
              <li> - Le développement Backend avec PHP</li>
              <li> - Le développement Backend avec Symfony</li>
              <li> - Projet : Développement d'une app Symfony</li>
              <li> - Le développement web avec Wordpress</li>
              <li> - Le développement mobile sous Android</li>
              <li> - Le développement Java EE avec Spring</li>
              <li> - Gestion de projet</li>
              <li> - Administration d'un serveur Apache sous Linux</li>
            </ul>
          </p>
        </section>
      </div>
      <Section>
        <div className={styles["eni"]}> 

        <h2>Projets réalisés à l'ENI</h2>
        <p className={styles["sous-titre"]}>
          Durant les deux années de formation, j'ai réalisé deux projets dans le cadre des cours, chacun s'étendant sur une période de deux semaines.        
        </p>
        <section >
          <div>
          <h3>Projet sortie : </h3>
            <p>
              En décembre 2023, j'ai collaboré avec trois autres étudiants de l'ENI sur un projet de deux semaines. 
              Notre évaluation s'est davantage concentrée sur la gestion de projet et l'organisation du code que sur les 
              fonctionnalités mises en œuvre sur le site créé. 
              L'utilisation de Symfony comme technologie de développement 
              était la seule contrainte imposée. Nous avons choisi d'utiliser Trello et GitLab pour la répartition des tâches, 
              la gestion du code, et dans une moindre mesure, la révision du code. 
              Trello est un outil en ligne gratuit qui facilite l'organisation des tâches de manière simple et 
              intuitive sur un tableau. GitLab, au-delà de la gestion de versions cruciale à tout projet, 
              nous a permis d'expérimenter avec les "issues" pour une meilleure gestion des branches.
            </p><br/>
              
              <Image
                alt="Gitlab gestion des issues"
                src="/gitlab-issues1.png"
                width={1074}
                height={185}
                layout="responsive"
              /><br/>
              <p>
                Le cahier des charges du projet était assez conséquent. En restant consis, 
                le site devait permettre la création d'événements ("sorties"), 
                auxquels les utilisateurs inscrits pouvaient participer. 
                Ces sorties pouvaient avoir plusieurs états (créé, publié, en cours, archivé, annulé, etc.), 
                impliquant la gestion de lieux, d'établissements scolaires ("sites"), entre autres. 
                Une gestion des droits d'accès spécifique a également était mise en place, 
                réservant par exemple la gestion des "sites" et des droits des membres aux administrateurs, 
                tandis que les utilisateurs pouvaient s'inscrire, créer et gérer leurs propres sorties.
              </p>

              <div className={styles["image-container"]}>
                  <Image
                    alt="Image du site en tant qu'administrateur"
                    src="/site-admin1.png"
                    layout="fill"
                    
                    className={styles["eni-image"]}
                  />
              </div>

              <p>
                Sur le plan du développement, j'ai consacré l'essentiel de mon temps à la gestion des sorties, 
                des lieux, des villes et des sites. Simfony a grandement simplifié plusieurs parties du développement comme 
                la gestion de la base de données et ses relations, la création des entités, le formulaire de connexion, etc. 
                En conclusion, le projet a souffert d'un manque de temps pour peaufiner l'aspect stylistique du site et résoudre certains bugs significatifs. 
                Cela souligne l'importance d'une meilleure gestion de projet qu'il nous a manqué, 
                notamment à travers des revues de code entre pairs et une gestion plus efficace des branches. Malgré tout, 
                le projet a été une expérience d'apprentissage enrichissante, tant sur le plan des technologies utilisées que de la gestion de projet.
              </p>
          </div>
       
        </section>
       

        </div>

      </Section>
      <div className={styles["double-section"]}>
        <section>
          <h2>BTS SIO (SLAM)</h2>
          <p>
            J'ai de 2020 à 2022 fait un BTS SIO (Services Informatiques aux
            Organisations), spécialité SLAM (Solutions Logicielles et
            Applications Métier) au sein du Lycée Chaptal.
          </p>
          <br></br>
          <p>
            Passionné d’informatique, j’ai choisi ce cursus afin d’améliorer mes
            compétences principalement en programmation et dans un second temps
            en réseau. Ce portfolio développé par moi-même, a été mis en place
            afin d’y exposer mes deux années d’études, mes compétences ainsi que
            les différents projets sur lesquels j’ai pu travailler
          </p>
        </section>
        <section>
          <p>
            Le brevet de Technicien Supérieur Services Informatiques aux
            Organisations, s’adresse à ceux qui souhaitent se former en deux ans
            au métier d’administrateur réseau ou de développeur. Elle propose
            deux spécialités:
          </p>
          <br></br>
          <p>
            SISR (Solutions d’infrastructure systèmes et réseaux) Destinée aux
            étudiants qui s’orientent vers les métiers liés à la conception et
            la maintenance d’infrastructures réseaux.
          </p>
          <br></br>
          <p>
            SLAM (solutions logicielles et applications métier) Destinée aux
            étudiants qui s’orientent vers les métiers liés à la conception et
            la maintenance de programmes applicatifs.
          </p>
        </section>
      </div>
      <Section>
        <h2>Quelques activités réalisées pendant mon BTS</h2>
        <p className={styles["sous-titre"]}>
          Les travaux pendant la 1er ont majoritairement étaient réalisés
          pendant le confinement, et donc en autonomie
        </p>
        <section className={styles.row1}>
          <p>
            Création de divers scripts Linux en bash, l’image ci-contre montre
            quelques lignes de code d’un script servant à : créer des
            répertoires, mettre des droits d’accès sur les répertoires, créer
            des groupes et des utilisateurs s’ils n’existent pas, donner les
            groupes qui correspondent aux utilisateurs et répertoires, tout cela
            pour que les nouveaux utilisateurs ne puissent accéder qu’aux
            répertoires autorisés.
          </p>
          <div className={styles["image-container"]}>
            <Image
              alt="script bash"
              src="/bash.png"
              layout="fill"
              className={styles["sio-image"]}
            />
          </div>
        </section>
        <section className={styles.row2}>
          <p>
            Création de 2 sites web, le premier dans le contexte d’une agence de
            randonnée en kayak: utilisation d’une base de données SQL pour créer
            un système de création du compte, d’authentification et de
            déconnexion. les utilisateurs connectés peuvent accéder à un
            catalogue de kayak. lors de la création du compte le mot de passe
            n’est pas envoyé « en clair » dans la base de données, il est
            d’abord hashé.
          </p>
          <div className={styles["image-container"]}>
            <Image
              alt="script php cayak_mor"
              src="/PHP.png"
              layout="fill"
              className={styles["sio-image"]}
            />
          </div>
        </section>
        <section className={styles.row3}>
          <p>
            le second site est similaire au premier, il utilise lui aussi une
            base de données SQL contenant des descriptions de produits qui sont
            ensuite affichées dans des catalogues sur le site, la différence
            avec le premier site est que le second utilise une architecture de
            code MVC (Model-View-Controller).
          </p>
          <div className={styles["image-container"]}>
            <Image
              alt="capture d'écran page login kayak_mor"
              src="/kayak.png"
              layout="fill"
              className={styles["sio-image"]}
            />
          </div>
        </section>
      </Section>
      <div className={styles["double-section"]}>
        <section>
          <h2>BAC PRO SN (RISC)</h2>
          <p>
            J’ai choisi cette formation car je n’avais pas à l’époque les
            ambitions d'aujourd’hui, je savais tout de même ce que je ne voulais
            pas faire, c’est pour cette raison que je me suis orienté vers ce
            bac.
          </p>
          <br></br>
          <p>
            ce n’est qu’en seconde année de bac pro que j’ai commencé à prendre
            goût à l’informatique grâce à des amis et certains professeurs, cet
            à ce moment que j’ai commencé à me former en autonomie.
          </p>
        </section>
        <section>
          <p>
            Le bac professionnel systèmes numériques (SN) forme des techniciens
            qui interviennent sur les équipements et installations intégrant des
            technologies numériques. Il propose 3 options :
          </p>
          <br></br>
          <p>
            SSIHT : Alarme, sûreté, sécurité, incendie ; gestion intelligente
            des bâtiments; domotique liée à la gestion technique de l’habitat.
          </p>
          <br></br>
          <p>
            ARED : audiovisuel multimédia ; électrodomestique; domotique liée au
            confort et à la gestion des énergies; éclairage et sonorisation.
          </p>
          <br></br>
          <p>
            RISC : télécommunications et réseaux; électronique industrielle et
            embarquée.
          </p>
        </section>
      </div>
    </Container>
  );
};

export default Etudes;
