import Link from 'next/link'

const Nav = ({ handleClickOut }) => {
    return (

        <ul>
            <li >
                <Link href="/"><a onClick={handleClickOut}>Accueil</a></Link>
            </li>
            <li>
                <Link href="/Etudes"><a onClick={handleClickOut}>Études</a></Link>
            </li>
            <li>
                <Link href="/Cv"><a onClick={handleClickOut}>CV</a></Link>
            </li>
            <li>
                <Link href="/Stages"><a onClick={handleClickOut}>Stages</a></Link>
            </li>
            <li>
                <Link href="/FicheDeCompetences"><a onClick={handleClickOut}>Fiche de compétences</a></Link>
            </li>
            <li>
                <Link href="/Veille"><a onClick={handleClickOut}>Veille informationnelle</a></Link>
            </li>
        </ul>

    );
};

export default Nav;