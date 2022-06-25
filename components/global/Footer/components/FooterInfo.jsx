import React from 'react'
import { FaBuilding } from 'react-icons/fa'
import { BsFillTelephoneFill, BsEnvelopeFill } from 'react-icons/bs'
import { FooterState } from '../../../../data/FooterContext'

const FooterInfo = () => {
    const { loading, error, data } = FooterState();
    if (loading) return <p>Loading</p>
    if (error) return <p>There is an error</p>
    const { location, phone, email } = data.footer.data.attributes
    return (
        <div className="footer__info">
            <h3>Contact Information</h3>
            <div>
                <span><FaBuilding /></span>
                <span>{location}</span>
            </div>
            <div>
                <span><BsFillTelephoneFill /></span>
                <span>{phone}</span>
            </div>
            <div>
                <span><BsEnvelopeFill /></span>
                <span>{email}</span>
            </div>
        </div>
    )
}

export default FooterInfo