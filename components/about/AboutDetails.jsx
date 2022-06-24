import React from 'react'
import SectionTitle from '../reusable/SectionTitle'

const AboutDetails = () => {
    const title = 'More about us'
    const description = 'Utilizing her exceptional experience and knowledge of the luxury waterfront markets, Simone serves an extensive and elite worldwide client base. '
    return (
        <section className="about__details section">
            <SectionTitle title={title} description={description} />

            <div className="about__details__container container">
                <div className='about__data'>
                    <h3>Our Vision</h3>
                    <p>
                        Due to our unparalleled results, expertise and dedication, we rank amongst the Top 6 agencies in Seattle and our area. She is also and is an elite member to Corcoran’s Presidents Council.
                    </p>
                </div>
                <div className='about__data'>
                    <h3>Our Vision</h3>
                    <p>
                        Due to our unparalleled results, expertise and dedication, we rank amongst the Top 6 agencies in Seattle and our area. She is also and is an elite member to Corcoran’s Presidents Council.
                    </p>
                </div>
                <div className='about__data'>
                    <h3>Our Vision</h3>
                    <p>
                        Due to our unparalleled results, expertise and dedication, we rank amongst the Top 6 agencies in Seattle and our area. She is also and is an elite member to Corcoran’s Presidents Council.
                    </p>
                </div>
                <div className='about__data'>
                    <h3>Our Vision</h3>
                    <p>
                        Due to our unparalleled results, expertise and dedication, we rank amongst the Top 6 agencies in Seattle and our area. She is also and is an elite member to Corcoran’s Presidents Council.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutDetails