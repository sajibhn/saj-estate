import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
                                    <Image src={fImage} alt="team image" width={353} height={231} />
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