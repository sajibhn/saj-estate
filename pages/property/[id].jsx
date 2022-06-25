import React from 'react'
import { useRouter } from 'next/router';
import PropertyDescription from '../../components/reusable/singleProperty/PropertyDescription'
import PropertyOverview from '../../components/reusable/singleProperty/PropertyOverview'
import PropertySlider from '../../components/reusable/singleProperty/PropertySlider'
import SingleTitle from '../../components/reusable/singleProperty/SingleTitle'
import UserInfo from '../../components/reusable/singleProperty/UserInfo'
import { gql, ApolloClient, InMemoryCache } from "@apollo/client";

const SingleProperty = ({ data, loading }) => {
    const router = useRouter()
    const listingId = router.query.id
    if (loading) return <p> loading ....</p>
    const listingData = data.listings.data[listingId]
    return (
        <>
            <section className="single__property">
                <PropertySlider listingData={listingData} />
                <div className="single__property__container container">
                    <div className='single__property__one'>
                        <SingleTitle listingData={listingData} />
                        <PropertyOverview listingData={listingData} />
                        <PropertyDescription listingData={listingData} />
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

export async function getStaticProps() {
    const client = new ApolloClient({
        uri: "http://localhost:1337/graphql",
        cache: new InMemoryCache(),
    });
    const { loading, error, data } = await client.query({
        query: gql`
      query {
        listings {
          data {
            attributes {
              featured_image {
                data {
                  attributes {
                    url
                  }
                }
              }
              gallery {
                data {
                  attributes {
                    url
                  }
                }
              }
              title
              type
              location
              price
              area
              property_type
              bedrooms
              bathrooms
              garage
              sq_ft
              description
              year_built
            }
          }
        }
      }
    `,
    });

    return {
        props: {
            loading,
            data
        },
    };
}

export async function getStaticPaths() {

    return {
        paths: [
            { params: { id: '0' } },
            { params: { id: '1' } },
            { params: { id: '2' } },
            { params: { id: '3' } },
            { params: { id: '4' } },
        ],
        fallback: false // false or 'blocking'
    };
}