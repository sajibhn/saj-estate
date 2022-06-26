import React from "react";
import ListingCard from "../../components/reusable/ListingCard";
import { gql, ApolloClient, InMemoryCache } from "@apollo/client";
const index = ({ data, loading }) => {
  return (
    <div>
      <div className="home__listing__container container">
        <ListingCard data={data} loading={loading} />
      </div>
    </div>
  );
};

export default index;

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
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      data
    },
  };
}
