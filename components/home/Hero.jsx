import React from 'react'

const Hero = () => {
    const bgImage = `linear-gradient(rgba(6, 42, 71, 0.705), rgba(6, 42, 71, 0.705)),
    url(https://wpresidence.net/wp-content/uploads/2021/12/wpresidece-header.jpg)`
    return (
        <section className="hero" style={{ backgroundImage: bgImage }}>
            <div className='hero__overlay'></div>
            <div className='hero__container'>
                <div className='hero__data' >
                    <h1>Find Your Dream Home</h1>
                    <p>
                        We are recognized for exceeding client expectations and delivering great results through dedication, ease of process, and extraordinary services to our worldwide clients.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero