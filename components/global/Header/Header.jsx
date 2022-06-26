import React, { useState } from 'react'
import NavLinks from './NavLinks'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <header className="header">
                <nav className={`${menuOpen ? 'nav active' : "nav"}`}>
                    <div className="nav__logo">
                        <Link href="/">
                            <Image src="/saj-estate.svg" alt="" width={196} height={60} objectFit="cover" />
                        </Link>
                    </div>

                    <NavLinks menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <div className="nav__toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header