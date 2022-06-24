import React from 'react'
import AboutDetails from '../../components/about/AboutDetails'
import Team from '../../components/about/Team'
import PageTitle from '../../components/reusable/PageTitle'
import Testimonial from '../../components/home/testimonial/Testimonial'

const About = () => {

    return (
        <>
            <PageTitle title="about" />
            <AboutDetails />
            <Team />
            <Testimonial />
        </>
    )
}

export default About