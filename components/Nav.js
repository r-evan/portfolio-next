import Link from 'next/link'

const Nav = () => {
    return (

        <ul>
            <li>
                <Link href="/">Accueil</Link>
            </li>
            <li>
                <Link href="/etudes">Études</Link>
            </li>
            <li>
                <Link href="/cv">CV</Link>
            </li>
            <li>
                <Link href="/stages">Stages</Link>
            </li>
            <li>
                <Link href="/fiche-de-competence">Fiche de compétences</Link>
            </li>
            <li>
                <Link href="/veille-informationnelle">Veille informationnelle</Link>
            </li>
        </ul>

    );
};

export default Nav;