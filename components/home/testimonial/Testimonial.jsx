import React from 'react'
import SectionTitle from '../../reusable/SectionTitle'
import TestimonialCard from './TestimonialCard'
import { HomeState } from '../../../data/HomeContext'



const Testimonial = () => {
    const { loading, error, data } = HomeState()
    if (loading) return <p>Loading</p>
    if (error) return <p>There is an error</p>
    const { testimonial_title, testimonial_description } = data.home.data.attributes;

    return (
        <section className="testimonial section ">
            <SectionTitle title={testimonial_title} description={testimonial_description} />
            <TestimonialCard />
        </section>
    )
}

export default Testimonial