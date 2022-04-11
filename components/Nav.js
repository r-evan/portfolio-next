import Link from 'next/link'

const Nav = () => {
    return (

        <ul>
            <li>
                <Link href="/">Accueil</Link>
            </li>
            <li>
                <Link href="/Etudes">Études</Link>
            </li>
            <li>
                <Link href="/Cv">CV</Link>
            </li>
            <li>
                <Link href="/Stages">Stages</Link>
            </li>
            <li>
                <Link href="/FicheDeCompetences">Fiche de compétences</Link>
            </li>
            <li>
                <Link href="/Veille">Veille informationnelle</Link>
            </li>
        </ul>

    );
};

export default Nav;