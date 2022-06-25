import React from 'react'
import StarRatings from 'react-star-ratings';
import { HomeState } from '../../../data/HomeContext';


const TestimonialCard = () => {
    const { loading, error, data } = HomeState()
    if (loading) return <p>Loading</p>
    if (error) return <p>There is an error</p>
    return (
        <div className="testimonial__container container">

            {data.testimonialCards.data.map((testimonial, index) => {
                const { client_image, client_name, client_postion, client_rating, client_review } = testimonial.attributes
                return (
                    <>
                        <div className="testimonial__card" key={index}>
                            <div className="testimonial__card__head">
                                <img src={`http://localhost:1337${client_image.data.attributes.url}`} alt="image" />
                                <div className='client__details'>
                                    <h3>{client_name}</h3>
                                    <span>{client_postion}</span>
                                </div>
                            </div>
                            <div className="testimonial__card__body">
                                <p>
                                    {client_review}
                                </p>
                                <StarRatings
                                    rating={client_rating}
                                    starRatedColor="#0268C7"
                                    numberOfStars={5}
                                    name='rating'
                                />
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default TestimonialCard