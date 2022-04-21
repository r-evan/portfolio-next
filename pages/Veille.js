import styles from "../styles/veille.module.scss"
import Head from "next/head"

const Veille = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Veille informatiques - Portfolio Evan Rioual</title>
                <meta name="description" content="Page de présentation du condensé de mes veilles informatiques,
                portant sur JavaScript et l'évolution des smartphones">
                </meta>
            </Head>
            <div className={styles.section}>
                <div className={styles.titre}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <h1>Veille informatique</h1>
                </div>
            </div>
            <div className={styles["para"]} >
                <section>
                    <h2>Une veille informationnelle?</h2>
                    <p>
                        Une veille est une activité consistant à rester au courant des dernières avancées et infos sur
                        un secteur donné. pendant mon BTS j’ai choisi de réaliser ma veille sur deux sujets :
                    </p><br></br>
                    <p>
                        – Une veille sur les dernières innovations au niveau des smartphones, ou plus globalement sur ce qui
                        touche à nos téléphones. Me permettant d’être à jour à ce sujet, et ainsi de pouvoir parler
                        à peu près en connaissance de cause sur ce sujet.
                    </p><br></br>
                    <p>
                        – Une veille sur les dernières nouvelles concernant JavaScript et encore une fois de façon plus large sur
                        les principaux Framework et librairies de ce dernier, dans le but de suivre l’évolution de mes outils de travail
                        et de savoir ce que valent les nouveaux.
                    </p><br></br>
                    <p>
                        Dans tout les cas faire une veille est très important car rester informé peut être primordial selon le secteur d’activité,
                        et surtout en informatique étant un domaine qui évolue sans cesse.
                    </p><br></br>
                    <p>
                        Pour effectuer ma veille j’ai utilisé Feedly pour me tenir informé, Feedly est une application permettant de
                        s’abonner facilement à un site ou à un flux RSS, il met les articles publié qui pourrait m’intéresser dans
                        des « feeds » préalablement créés. J’ai aussi utilisé pearltrees pour pouvoir diffuser simplement les articles
                        retenues pour ma veille.
                    </p>
                </section>
            </div>
            <div className={styles["veille"]} >
                <h2>Thème 1 : Smartphones</h2>
                <iframe src="https://www.pearltrees.com/evanrioual/informationnelle-smartphone/id41534085?embed=2&d=202204052153"
                    className={styles.pearltrees1} allowtransparency="true">
                </iframe><span className={styles.pearltrees1} >
                    <a href="https://www.pearltrees.com/evanrioual/informationnelle-smartphone/id41534085" rel="noreferrer"
                        className={styles.pearltrees} target="_blank">Veille informationnelle smartphone</a>, par
                    <a href="https://www.pearltrees.com/evanrioual" rel="noreferrer"
                        className={styles.pearltrees} target="_blank">evanrioual</a></span>
                <section className={styles["after-pearltrees"]}>
                    <p>
                        Source : Android community,  Apple newsroom, Smartphones – 01net, Smartphone France Android édition.
                    </p><br></br>
                    <p>
                        Ma synthèse : De façon générale chaque année les géants du marché du mobile s’améliore au niveau des
                        performances (stockage, processeur, qualité des photos…), le cout des téléphones pliables
                        diminue mais reste très cher de plus après un début difficile les modèles ont beaucoup moins de défauts de
                        conception, de nouvelles innovations comme le détecteur d’empreinte sur l’ensemble de l’écran ou le capteur
                        photos sous l’écran ne devraient pas tarder à arriver.
                    </p><br></br>
                    <p>
                        Conclusion : Des deux veilles informationnelle, celle-ci n’a en réalité pas grand intérêt pour moi étant
                        donné que la majorité des informations sont diffusées par les médias, de plus les actualités de ce domaine
                        ne me concerne pas plus qu’autre chose par rapport à mon utilisation personnelle des portables.
                    </p>
                </section>
            </div>
            <div className={styles["veille"]} >
                <h2>Thème 2 : JavaScript</h2>
                <iframe src="https://www.pearltrees.com/evanrioual/veille-informatique-javascript/id45751689?embed=2&d=202204061411"
                    className={styles.pearltrees1} allowtransparency="true">
                </iframe><span className={styles.pearltrees1} >
                    <a href="https://www.pearltrees.com/evanrioual/veille-informatique-javascript/id45751689" rel="noreferrer"
                        className={styles.pearltrees} target="_blank">Veille informationnelle smartphone</a>, par
                    <a href="https://www.pearltrees.com/evanrioual" rel="noreferrer"
                        className={styles.pearltrees} target="_blank">evanrioual</a></span>
                <section className={styles["after-pearltrees"]}>
                    <p>
                        Source : Human Coders New : JavaScript, JavaScript Weekly, Vue.js News, Node.js Blog.
                    </p><br></br>
                    <p>
                        Ma synthèse : Bien que les mises à jour importantes soient peu fréquente, la popularité
                        de javascript ne fais aucun doute et les nouvelles librairies/Framework sont fréquentes,
                        les dernières mises à jour de mes principaux Framework (Vue, React) sont mineures, la popularité de ces technologies
                        stagne bien quelles soient déjà encrées dans l’écosystème de JavaScript.
                    </p><br></br>
                    <p>
                        Conclusion : J’ai apprécié réalisé cette veille car les nouvelles librairies JavaScript sont intéressantes,
                        le contenu récupéré est de façon général plus qualitatif et il peut m’aider dans mon projet professionnelle.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Veille;