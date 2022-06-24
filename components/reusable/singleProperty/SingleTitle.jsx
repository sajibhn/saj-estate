import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

const SingleTitle = () => {
    return (
        <section className="section single__title">
            <div className="single__title__container container">
                <div className="single__title__left">
                    <h3>New Apartment</h3>
                    <span className='category'>for sale</span>
                    <div className='address'>
                        <span>
                            <FaMapMarkerAlt />
                        </span>
                        <span>
                            6701 South Dixie Highway, Miami, FL, USA
                        </span>
                    </div>
                </div>
                <div className="single__title__right">
                    <h3>$125,000</h3>
                    <span>$900/sq Ft</span>
                </div>
            </div>
        </section>
    )
}

export default SingleTitle