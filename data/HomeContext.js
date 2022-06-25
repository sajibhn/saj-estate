import React, { useContext, useState } from "react";
import { createContext } from "react";
import { useQuery, gql } from "@apollo/client";

const homeData = createContext();

const ProcessCards = gql`
  query GetCards {
    home {
      data {
        attributes {
          page_title
          hero_title
          hero_description
          hero_bg {
            data {
              attributes {
                url
              }
            }
          }
          process_title
          process_description
          listing_title
          listing_description
          cta_title
          cta_description
          testimonial_title
          testimonial_description
        }
      }
    }
    processCards {
      data {
        attributes {
          number
          title
          description
        }
      }
    }
    testimonialCards {
      data {
        attributes {
          client_name
          client_postion
          client_review
          client_rating
          client_image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const HomeContext = ({ children }) => {

  const { loading, error, data } = useQuery(ProcessCards);

  return (
    <homeData.Provider value={{ loading, error, data }}>
      {children}
    </homeData.Provider>
  );
};

export default HomeContext;

export const HomeState = () => {
  return useContext(homeData);
};
