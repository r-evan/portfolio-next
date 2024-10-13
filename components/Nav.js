import Link from "next/link";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link href="#cv">CV</Link>
      </li>
      <li>
        <Link href="#realisations">Réalisations</Link>
      </li>
      <li>
        <Link href="#etudes">Études</Link>
      </li>
    </ul>
  );
};

export default Nav;
