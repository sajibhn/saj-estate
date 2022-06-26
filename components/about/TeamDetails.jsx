import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { AboutState } from '../../data/AboutContext'

const TeamDetails = () => {
    const { loading, data } = AboutState()
    if (loading) return <p> Loading....</p>

    return (
        <div className="team__details container">
            {
                data.teamLists.data.map((item) => {
                    const { name, role, details, image } = item.attributes
                    const fImage = image.data.attributes.url
                    return (
                        <>
                            <div className="team__card" key={item.id}>
                                <div className="team__card__head">
                                    <img src={`http://localhost:1337${fImage}`} />
                                </div>
                                <div className="team__card__body">
                                    <h3>{name}</h3>
                                    <p>{role}</p>
                                    <div className="team__card__info">
                                        <p>
                                            {details}
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

                        </>
                    )
                })
            }
        </div>
    )
}

export default TeamDetails