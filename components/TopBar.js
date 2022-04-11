import Nav from './Nav'
import Link from 'next/link'
import BoutonBurger from './BoutonBurger';
import { useState } from 'react';

const TopBar = () => {
    const [open, setOpen] = useState(false);

    const handleBoutonClick = () => {
        setOpen(!open);
    }
    const handleClickOut = () => {
        setOpen(false);
    }

    return (
        <nav className="topbar">
            <Link href="/" passHref><h2>Evan Rioual</h2></Link>
            <Nav />
            <BoutonBurger open={open} handleBoutonClick={handleBoutonClick} handleClickOut={handleClickOut} />

        </nav>
    );
};

export default TopBar;