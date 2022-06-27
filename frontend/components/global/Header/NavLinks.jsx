import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { navLinks } from '../../../data/navLinks'

const NavLinks = ({ menuOpen, setMenuOpen }) => {
    const [links, setLinks] = useState(navLinks);
    const router = useRouter();
    return (
        <div className="nav__menu">
            <ul className="nav__list">
                {
                    links.map((link) => {
                        const { id, title, value } = link
                        return (
                            <li className="nav__item" key={id} onClick={() => setMenuOpen(!menuOpen)}>
                                <Link href={value}>
                                    <a className={router.pathname == value ? 'link__active nav__link' : 'nav__link'}>{title}</a>
                                </Link>
                            </li>
                        )
                    })
                }
                <li className="nav__item nav__fav" onClick={() => setMenuOpen(!menuOpen)}>
                    <Link href='/cart'>
                        <a className="nav__link ">favorites</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavLinks