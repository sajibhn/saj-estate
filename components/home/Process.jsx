import React from 'react'
import ProcessCard from '../reusable/ProcessCard'
import SectionTitle from '../reusable/SectionTitle'

const Process = () => {
    const title = 'How It Works?'
    const description = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores'
    return (
        <section className="section process">
            <SectionTitle title={title} description={description} />
            <div className="process__container container">
                <ProcessCard />
            </div>
        </section>
    )
}

export default Process