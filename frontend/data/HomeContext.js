import React, { useContext } from "react";
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
    processcards {
      data {
        attributes {
          number
          title
          description
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
  listings{
    
    data{
      attributes{
        featured_image{
          data{
            attributes{
              url
            }
          }
        }
        title
        location
        price
        area
        bedrooms
        bathrooms
         garage
        description
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
