import React from 'react'
import FooterCopy from './components/FooterCopy'
import FooterInfo from './components/FooterInfo'
import NewsLetter from './components/NewsLetter'

const Footer = () => {
    return (
        <section className="footer section">
            <div className="footer__container container">
                <FooterInfo />
                <NewsLetter />
            </div>
            <FooterCopy />
        </section>
    )
}

export default Footer