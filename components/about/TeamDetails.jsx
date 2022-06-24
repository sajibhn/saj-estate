import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const TeamDetails = () => {
    return (
        <div className="team__details container">
            <div className="team__card">
                <div className="team__card__head">
                    <img src='https://wpresidence.net/wp-content/uploads/2014/05/person_sam_davies-500x328.png' />
                </div>
                <div className="team__card__body">
                    <h3>Mike Rutter</h3>
                    <p>buying agent</p>
                    <div className="team__card__info">
                        <p>
                            Whether it is working with a first time homebuyer, a luxury home listing or a seasoned inv ...
                        </p>

                        <div className="social__icons">
                            <div>
                                <Link href='/'>
                                    <a>
                                        <FaFacebookF />
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href='/'>
                                    <a>
                                        <FaTwitter />
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href='/'>
                                    <a>
                                        <FaLinkedinIn />
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href='/'>
                                    <a>
                                        <FaInstagram />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team__card">
                <div className="team__card__head">
                    <img src='https://wpresidence.net/wp-content/uploads/2014/05/person_sam_davies-500x328.png' />
                </div>
                <div className="team__card__body">
                    <h3>Mike Rutter</h3>
                    <p>buying agent</p>
                    <div className="team__card__info">
                        <p>
                            Whether it is working with a first time homebuyer, a luxury home listing or a seasoned inv ...
                        </p>

                        <div className="social__icons">
                            <div>
                                <Link href='/'>
                                    <a>
                                        <FaFacebookF />
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href='/'>
                                    <a>
                                        <FaTwitter />
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href='/'>
                                    <a>
                                        <FaLinkedinIn />
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href='/'>
                                    <a>
                                        <FaInstagram />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team__card">
                <div className="team__card__head">
                    <img src='https://wpresidence.net/wp-content/uploads/2014/05/person_sam_davies-500x328.png' />
                </div>
                <div className="team__card__body">
                    <h3>Mike Rutter</h3>
                    <p>buying agent</p>
                    <div className="team__card__info">
                        <p>
                            Whether it is working with a first time homebuyer, a luxury home listing or a seasoned inv ...
                        </p>

                        <div className="social__icons">
                            <div>
                                <Link href='/'>
                                    <a>
                                        <FaFacebookF />
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href='/'>
                                    <a>
                                        <FaTwitter />
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href='/'>
                                    <a>
                                        <FaLinkedinIn />
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href='/'>
                                    <a>
                                        <FaInstagram />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamDetails