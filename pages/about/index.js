import React from 'react'
import AboutDetails from '../../components/about/AboutDetails'
import Team from '../../components/about/Team'
import PageTitle from '../../components/reusable/PageTitle'

const About = () => {

    return (
        <>
            <PageTitle title="about" />
            <AboutDetails />
            <Team />
        </>
    )
}

export default About