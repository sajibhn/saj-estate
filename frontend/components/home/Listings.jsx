import React from 'react'
import SectionTitle from '../reusable/SectionTitle'
import ListingCard from '../reusable/ListingCard'
import { HomeState } from '../../data/HomeContext'
import Loader from '../reusable/Loader'

const Listings = () => {
    const { loading, error, data } = HomeState()
    if (loading) return <Loader />
    if (error) return <p>There is an error</p>
    const { listing_title, listing_description } = data.home.data.attributes;
    return (
        <section className="section home__listings">
            <SectionTitle title={listing_title} description={listing_description} />
            <div className="home__listing__container container">
                <ListingCard data={data} simplified />
            </div>
        </section>
    )
}

export default Listings