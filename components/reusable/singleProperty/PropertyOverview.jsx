import React from 'react'
import { BiBed } from 'react-icons/bi'
import { FaShower } from 'react-icons/fa'
import { AiFillCar, AiFillBuild, AiFillCalendar } from 'react-icons/ai'

const PropertyOverview = () => {
    return (
        <section className="property__overview">
            <h3>Overview</h3>
            <div className='property__overview__container'>
                <div className="property__item">
                    <h5>Studio</h5>
                    <h4 className="property__item__title">Property Type</h4>
                </div>
                <div className="property__item">
                    <div className='icon__container'>
                        <span>
                            <BiBed />
                        </span>
                        <span>
                            4
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
                            2
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
                            1
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
                            1200
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
                            2016
                        </span>
                    </div>
                    <h4 className="property__item__title">Year Built</h4>
                </div>
            </div>
        </section>
    )
}

export default PropertyOverview