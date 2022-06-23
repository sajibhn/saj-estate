import React from 'react'
import SectionTitle from '../reusable/SectionTitle'
import ListingCard from '../reusable/ListingCard'

const Listings = () => {
    const title = 'Explore Good Places'
    const description = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores    '
    return (
        <section className="section home__listings">
            <SectionTitle title={title} description={description} />
            <div className="home__listing__container container">
                <ListingCard />
            </div>
        </section>
    )
}

export default Listings