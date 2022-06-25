import React from 'react'

const PropertyDescription = ({ listingData }) => {
    return (
        <section className="property__description">
            <h3>Description</h3>
            <p>

                {listingData.attributes.description}

            </p>
        </section>
    )
}

export default PropertyDescription