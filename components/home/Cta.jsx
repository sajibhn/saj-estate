import React from 'react'
import Link from 'next/link'

const Cta = () => {
    return (
        <section className="section cta">
            <div className="cta__container container">
                <div className="cta__text">
                    <h2>Rent Your Dream Home</h2>
                    <p>We are recognized for exceeding client expectations and delivering great results through dedication, ease of process, and extraordinary services to our worldwide clients.</p>
                </div>
                <cta className="cta__btn">
                    <Link href='/contact'>
                        <a className='btn btn-white'>Contact</a>
                    </Link>
                </cta>
            </div>
        </section>
    )
}

export default Cta