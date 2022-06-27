import React from 'react'
import { BiBed } from 'react-icons/bi'
import { FaShower } from 'react-icons/fa'
import { AiFillCar, AiFillBuild, AiFillCalendar } from 'react-icons/ai'

const PropertyOverview = ({ listingData }) => {
    const { property_type, bedrooms, bathrooms, garage, sq_ft, year_built } = listingData.attributes
    return (
        <section className="property__overview">
            <h3>Overview</h3>
            <div className='property__overview__container'>
                <div className="property__item">
                    <h5>{property_type}</h5>
                    <h4 className="property__item__title">Property Type</h4>
                </div>
                <div className="property__item">
                    <div className='icon__container'>
                        <span>
                            <BiBed />
                        </span>
                        <span>
                            {bedrooms}
                        </span>
                    </div>
                    <h4 className="property__item__title">Bedrooms</h4>
                </div>
                <div className="property__item">
                    <div className='icon__container'>
                        <span>
                            <FaShower />
                        </span>
                        <span>
                            {bathrooms}
                        </span>
                    </div>
                    <h4 className='property__item__title'>Bathrooms</h4>
                </div>
                <div className="property__item">
                    <div className='icon__container'>
                        <span>
                            <AiFillCar />
                        </span>
                        <span>
                            {garage}
                        </span>
                    </div>
                    <h4 className="property__item__title">Garage</h4>
                </div>
                <div className="property__item">
                    <div className='icon__container'>
                        <span>
                            <AiFillBuild />
                        </span>
                        <span>
                            {sq_ft}
                        </span>
                    </div>
                    <h4 className="property__item__title">Sq Ft</h4>
                </div>
                <div className="property__item">
                    <div className='icon__container'>
                        <span>
                            <AiFillCalendar />
                        </span>
                        <span>
                            {year_built}
                        </span>
                    </div>
                    <h4 className="property__item__title">Year Built</h4>
                </div>
            </div>
        </section>
    )
}

export default PropertyOverview