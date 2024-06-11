import Link from "next/link";

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
        <Link href="/cv">CV & Réalisations</Link>
      </li>
      <li>
        <Link href="/stages">Alternance</Link>
      </li>
      {/* <li>
        <Link href="/fiche-de-competence">Fiche de compétences</Link>
      </li>
      <li>
        <Link href="/veille-informationnelle">Veille informationnelle</Link>
      </li> */}
    </ul>
  );
};

export default Nav;
