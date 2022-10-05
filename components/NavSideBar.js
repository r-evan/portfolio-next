import Link from 'next/link'

const Nav = ({ handleClickOut }) => {
    return (

        <ul>
            <li >
                <Link href="/"><a onClick={handleClickOut}>Accueil</a></Link>
            </li>
            <li>
                <Link href="/etudes"><a onClick={handleClickOut}>Études</a></Link>
            </li>
            <li>
                <Link href="/cv"><a onClick={handleClickOut}>CV & Réalisations</a></Link>
            </li>
            <li>
                <Link href="/stages"><a onClick={handleClickOut}>Stages</a></Link>
            </li>
            <li>
                <Link href="/fiche-de-competence"><a onClick={handleClickOut}>Fiche de compétences</a></Link>
            </li>
            <li>
                <Link href="/veille-informationnelle"><a onClick={handleClickOut}>Veille informationnelle</a></Link>
            </li>
        </ul>

    );
};

export default Nav;
