import React from 'react'
import AboutDetails from '../../components/about/AboutDetails'
import Team from '../../components/about/Team'
import PageTitle from '../../components/reusable/PageTitle'
import SectionTitle from '../../components/reusable/SectionTitle'

const About = () => {

    return (
        <>
            <PageTitle />
            <AboutDetails />
            <Team />
        </>
    )
}

export default About