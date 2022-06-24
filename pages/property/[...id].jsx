import React from 'react'
import PropertyDescription from '../../components/reusable/singleProperty/PropertyDescription'
import PropertyOverview from '../../components/reusable/singleProperty/PropertyOverview'
import PropertySlider from '../../components/reusable/singleProperty/PropertySlider'
import SingleTitle from '../../components/reusable/singleProperty/SingleTitle'
import UserInfo from '../../components/reusable/singleProperty/UserInfo'

const SingleProperty = () => {
    return (
        <>
            <section className="single__property">
                <div className="single__property__container container">
                    <div className='single__property__one'>
                        <SingleTitle />
                        {/* <PropertySlider /> */}
                        <PropertyOverview />
                        <PropertyDescription />
                    </div>
                    <div className='single__property__two'>
                        <UserInfo />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProperty