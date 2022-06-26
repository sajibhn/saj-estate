import React, { useState } from 'react'
import NavLinks from './NavLinks'
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose, AiFillHeart } from 'react-icons/ai';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <header className="header">
                <nav className={`${menuOpen ? 'nav active' : "nav"}`}>
                    <div className="nav__logo">
                        <h2 className="nav__logo-title">Saj Estate</h2>
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