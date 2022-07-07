import React from 'react'
import { AboutState } from '../../data/AboutContext'
import Loader from '../reusable/Loader'
import SectionTitle from '../reusable/SectionTitle'
import TeamDetails from './TeamDetails'

const Team = () => {
    const { loading, error, data } = AboutState()
    if (loading) return <Loader />
    if (error) return <p>There is an error</p>
    const { team_title, team_details } = data?.about?.data?.attributes

    return (
        <section className="section team">
            <SectionTitle title={team_title} description={team_details} />
            <TeamDetails />
        </section>
    )
}

export default Team