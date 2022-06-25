import React from 'react'
import ProcessCard from '../reusable/ProcessCard'
import SectionTitle from '../reusable/SectionTitle'
import { HomeState } from '../../data/HomeContext'

const Process = () => {
    const { loading, error, data } = HomeState()
    if (loading) return <p>Loading</p>
    if (error) return <p>There is an error</p>
    const { process_title, process_description } = data.home.data.attributes;
    return (
        <section className="section process">

            <SectionTitle title={process_title} description={process_description} />
            <div className="process__container container">
                <ProcessCard />
            </div>
        </section>
    )
}

export default Process