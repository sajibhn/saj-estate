import React from 'react'
import SectionTitle from '../reusable/SectionTitle'
import TeamDetails from './TeamDetails'

const Team = () => {
    const title = 'Meet our team    '
    const description = 'If you want the best care possible for your real estate needs, our certified professionals are here to help'
    return (
        <section className="section team">
            <SectionTitle title={title} description={description} />
            <TeamDetails />
        </section>
    )
}

export default Team