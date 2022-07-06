import React from 'react'
import { HomeState } from '../../data/HomeContext'

const Hero = () => {
    const { loading, error, data } = HomeState()
    if (loading) return <p>Loading</p>
    if (error) return <p>There is an error</p>
    const { hero_title, hero_description, hero_bg } = data.home.data.attributes;
    const backgroundImage = hero_bg.data.attributes.url;
    const bgImage = `linear-gradient(rgba(6, 42, 71, 0.705), rgba(6, 42, 71, 0.705)),
    url(${backgroundImage})`
    console.log(data.listings.data[0].attributes)
    return (
        <section className="hero" style={{ backgroundImage: bgImage }}>
            <div className='hero__overlay'></div>
            <div className='hero__container'>
                <div className='hero__data' >
                    <h1>{hero_title}</h1>
                    <p>
                        {hero_description}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero