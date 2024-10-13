import Link from "next/link";

const Nav = ({ handleClickOut }) => {
  return (
    <ul>
      <li>
        <Link href="#cv"> 
          <a onClick={handleClickOut}>CV</a>
        </Link>
      </li>
      <li>
        <Link href="#realisations" >
          <a onClick={handleClickOut}>Réalisations</a>
        </Link>
      </li>
      <li>
        <Link href="#etudes">
          <a onClick={handleClickOut}>Études</a>
        </Link>
      </li>
  
      {/* <li>
        <Link href="/fiche-de-competence">
          <a onClick={handleClickOut}>Fiche de compétences</a>
        </Link>
      </li>
      <li>
        <Link href="/veille-informationnelle">
          <a onClick={handleClickOut}>Veille informationnelle</a>
        </Link>
      </li> */}
    </ul>
  );
};

export default Nav;
