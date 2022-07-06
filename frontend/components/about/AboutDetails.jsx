import React from 'react'
import { AboutState } from '../../data/AboutContext'
import SectionTitle from '../reusable/SectionTitle'

const AboutDetails = () => {
    const { loading, error, data } = AboutState()
    if (loading) return <p>Loading</p>
    if (error) return <p>There is an error</p>
    const { about_details_title, about_details_description } = data.about.data.attributes
    return (
        <section className="about__details section">
            <SectionTitle title={about_details_title} description={about_details_description} />

            <div className="about__details__container container">

                {data.aboutDescriptionLists.data.map((item, index) => {

                    const { title, description } = item.attributes
                    return (
                        <>
                            <div className='about__data' key={index}>
                                <h3>{title}</h3>
                                <p>
                                    {description}
                                </p>
                            </div>
                        </>
                    )
                })}
            </div>
        </section>
    )
}

export default AboutDetails