import React from 'react'
import SectionTitle from '../../reusable/SectionTitle'
import TestimonialCard from './TestimonialCard'



const Testimonial = () => {
    const title = 'Testimonials'
    const description = 'Publish the best of your client testimonials and let the world know what a great agent or real estate agency you are. Testimonials build trust.    '
    return (
        <section className="testimonial section ">
            <SectionTitle title={title} description={description} />
            <TestimonialCard />
        </section>
    )
}

export default Testimonial