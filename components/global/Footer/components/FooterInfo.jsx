import React from 'react'
import { FaBuilding } from 'react-icons/fa'
import { BsFillTelephoneFill, BsEnvelopeFill } from 'react-icons/bs'

const FooterInfo = () => {
    return (
        <div className="footer__info">
            <h3>Contact Information</h3>
            <div>
                <span><FaBuilding /></span>
                <span>3755 Commercial St SE Salem, Corner with Sunny Boulevard, 3755 Commercial OR 97302</span>
            </div>
            <div>
                <span><BsFillTelephoneFill /></span>
                <span>(305) 555-4446</span>
            </div>
            <div>
                <span><BsEnvelopeFill /></span>
                <span>youremail@gmail.com</span>
            </div>
        </div>
    )
}

export default FooterInfo