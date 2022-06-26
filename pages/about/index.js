import React from 'react'
import AboutDetails from '../../components/about/AboutDetails'
import Team from '../../components/about/Team'
import PageTitle from '../../components/reusable/PageTitle'
import Testimonial from '../../components/home/testimonial/Testimonial'
import AboutContext from '../../data/AboutContext'

const About = () => {
    return (
        <>
            <AboutContext>
                <PageTitle title="about" />
                <AboutDetails />
                <Team />
                <Testimonial />
            </AboutContext>
        </>
    )
}

export default About