import React from 'react'
import SectionTitle from '../../reusable/SectionTitle'
import TestimonialCard from './TestimonialCard'
import { gql, useQuery } from '@apollo/client'

const TestimonialCardQuery = gql`
    query GetTestimonial {
        home {
      data {
        attributes {
          testimonial_title
          testimonial_description
        }
      }
    }
    testimonialcards{
    data{
      attributes{
        client_image{
          data{
            attributes{
              url
            }
          }
        }
        client_name
        client_position
        client_review
        client_rating
        
      }
    }
  }
}
`

const Testimonial = () => {
  const { loading, error, data } = useQuery(TestimonialCardQuery)
  if (loading) return <p>Loading</p>
  if (error) return <p>There is an error</p>
  const { testimonial_title, testimonial_description } = data.home.data.attributes;

  return (
    <section className="testimonial section ">
      <SectionTitle title={testimonial_title} description={testimonial_description} />
      <TestimonialCard data={data} loading={loading} />
    </section>
  )
}

export default Testimonial