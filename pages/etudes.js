import styles from "../styles/etude.module.scss";
import Section from "../components/Section";
import Image from "next/image";

const Etudes = () => {
  return (
    <div id="etudes"> 
 

      <div className={styles["double-section"]}>
        <section>
          <h2>Alternance CDA à l'ENI</h2>
          <p> J'ai récemment obtenu mon diplôme de Concepteur Développeur d'Applications
            (BAC+4) après deux années d'alternance à l'ENI, dans le cadre de leur formation à Quimper.
          </p> <br />
          <p> Cette formation représente pour moi la continuité logique de mon BTS SIO. Bien que j'ai eu la
            possibilité de m'orienter vers une licence CDA à Brest, c'est l'expérience pratique en entreprise qui a
            orienté mon choix vers l'ENI. </p> <br /> <p> J'effectue mon alternance au sein de CGI, l'un des leaders mondiaux
              en services-conseils en technologie de l'information. Ma mission consistais à mettre en œuvre des évolutions et des
              correctifs sur l'ERP Oracle EBS d'un client. Pour cela, j'utilisais principalement SQL Developer, Talend, APEX et PuTTY.</p>
        </section>
        <section>
          <h3>Compétences Acquises</h3>
          <p>Voici un aperçu des compétences que j'ai développées durant ma formation :</p> <br />
          <ul>
            <li>Langage SQL et PL/SQL</li>
            <li>Développement en couches avec Java SE</li>
            <li>Développement Backend avec Java EE</li>
            <li>Projet : Développement d’une application Java EE</li>
            <li>Développement Frontend avec JavaScript</li>
            <li>Développement Backend avec PHP</li>
            <li>Développement Backend avec Symfony</li>
            <li>Projet : Développement d'une application Symfony</li>
            <li>Développement web avec WordPress</li>
            <li>Développement mobile sous Android</li>
            <li>Développement Java EE avec Spring</li>
            <li>Gestion de projet</li>
            <li>Administration d'un serveur Apache sous Linux</li>
          </ul>
        </section>
      </div>
      <Section>
        <div className={styles["eni"]}>

          <h2>Projets Réalisés à l'ENI</h2>
          <p className={styles["sous-titre"]}> Au cours de mes deux années de formation, j'ai mené à bien plusieurs projets dans le cadre des cours, chacun d'une durée de deux semaines. </p>
          <section>
            <div>
              <h3>Projet Sortie</h3>
              <p> En décembre 2023, j'ai collaboré avec trois autres étudiants de l'ENI sur un projet de deux semaines.
                Notre évaluation s'est principalement concentrée sur la gestion de projet et l'organisation du code,
                plutôt que sur les fonctionnalités mises en œuvre sur le site. Nous avons choisi Symfony comme technologie de développement,
                conformément à la seule contrainte imposée. Pour la répartition des tâches et la gestion du code,
                nous avons utilisé Trello et GitLab, bien que Trello ait été notre principal outil pour organiser les tâches de manière simple et intuitive.
                GitLab, en plus de sa gestion de versions essentielle, nous a permis d'expérimenter les "issues" pour une meilleure gestion des branches. </p>
              
              <br />

              <Image
                alt="Gestion des issues sur GitLab"
                src="/gitlab-issues1.png"
                width={1074}
                height={185}
                layout="responsive"
              />
              <br />
              <p>
                Le cahier des charges du projet était riche et détaillé. Le site devait permettre la création d'événements ("sorties") auxquels les utilisateurs inscrits pouvaient participer. Ces sorties pouvaient avoir plusieurs états (créé, publié, en cours, archivé, annulé, etc.) et nécessitaient la gestion de lieux, d'établissements scolaires ("sites"), entre autres. Une gestion des droits d'accès spécifique a également été mise en place : par exemple, la gestion des "sites" et les droits des membres étaient réservés aux administrateurs, tandis que les utilisateurs pouvaient s'inscrire, créer et gérer leurs propres sorties.
              </p>
              <div className={styles["image-container"]}>
                <Image
                  alt="Vue du site en tant qu'administrateur"
                  src="/site-admin1.png"
                  layout="fill"
                  className={styles["eni-image"]}
                />
              </div>
              <p>
                Du côté développement, j'ai principalement travaillé sur la gestion des sorties, des lieux, des villes et des sites. Symfony a grandement facilité plusieurs aspects du développement, tels que la gestion de la base de données et ses relations, la création des entités et le formulaire de connexion. En conclusion, bien que le projet ait souffert d'un manque de temps pour peaufiner l'aspect stylistique et résoudre certains bugs, il a souligné l'importance d'une gestion de projet améliorée, notamment par le biais de revues de code entre pairs et d'une gestion plus efficace des branches. Malgré ces défis, ce projet a constitué une expérience d'apprentissage précieuse, tant sur le plan technique que sur le plan de la gestion de projet.
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
    </div>
  );
};

export default Etudes;
