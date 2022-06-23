import React from 'react'
import StarRatings from 'react-star-ratings';


const TestimonialCard = () => {
    return (
        <div className="testimonial__container container">
            <div className="testimonial__card">
                <div className="testimonial__card__head">
                    <img src="https://wpresidence.net/wp-content/uploads/2021/08/team3-e1629289062721.jpeg" alt="image" />
                    <div className='client__details'>
                        <h3>Donna Gilmore</h3>
                        <span>happy seller</span>
                    </div>
                </div>
                <div className="testimonial__card__body">
                    <p>
                        I reviewed and purchased a number of different WordPress Themes before settling on Wp Residence.
                    </p>
                    <StarRatings
                        rating={4}
                        starRatedColor="#0268C7"
                        numberOfStars={5}
                        name='rating'
                    />
                </div>
            </div>
            <div className="testimonial__card">
                <div className="testimonial__card__head">
                    <img src="https://wpresidence.net/wp-content/uploads/2021/08/team3-e1629289062721.jpeg" alt="image" />
                    <div className='client__details'>
                        <h3>Donna Gilmore</h3>
                        <span>happy seller</span>
                    </div>
                </div>
                <div className="testimonial__card__body">
                    <p>
                        I reviewed and purchased a number of different WordPress Themes before settling on Wp Residence.
                    </p>
                    <StarRatings
                        rating={4}
                        starRatedColor="#0268C7"
                        numberOfStars={5}
                        name='rating'
                    />
                </div>
            </div>
            <div className="testimonial__card">
                <div className="testimonial__card__head">
                    <img src="https://wpresidence.net/wp-content/uploads/2021/08/team3-e1629289062721.jpeg" alt="image" />
                    <div className='client__details'>
                        <h3>Donna Gilmore</h3>
                        <span>happy seller</span>
                    </div>
                </div>
                <div className="testimonial__card__body">
                    <p>
                        I reviewed and purchased a number of different WordPress Themes before settling on Wp Residence.
                    </p>
                    <StarRatings
                        rating={4}
                        starRatedColor="#0268C7"
                        numberOfStars={5}
                        name='rating'
                    />
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard