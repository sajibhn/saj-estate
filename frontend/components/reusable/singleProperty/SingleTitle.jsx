import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

const SingleTitle = (listingData) => {
    const { title, type, location, price, area } = listingData.listingData.attributes
    return (
        <section className="single__title">
            <div className="single__title__container">
                <div className="single__title__left">
                    <h3>{title}</h3>
                    <span className='category'>{type}</span>
                    <div className='address'>
                        <span>
                            <FaMapMarkerAlt />
                        </span>
                        <span>
                            {location}
                        </span>
                    </div>
                </div>
                <div className="single__title__right">
                    <h3>${price}</h3>
                    <span>{area}</span>
                </div>
            </div>
        </section>
    )
}

export default SingleTitle