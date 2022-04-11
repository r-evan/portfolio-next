import React from 'react';
import Link from 'next/link';

const LinkComp = ({lien, children}) => {
    return (
        <Link href={lien}><a href={lien} target="_blank" rel="noreferrer">{children}</a></Link>
    );
};

export default LinkComp;