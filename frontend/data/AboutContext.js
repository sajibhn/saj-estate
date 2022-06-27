import React, { useContext } from "react";
import { createContext } from "react";
import { useQuery, gql } from "@apollo/client";

const AboutData = createContext();

const AboutInfo = gql`
query GetAbout {
  about{
    data{
      attributes{
        page_title
        about_details_title
        about_details_description
        team_title
        team_details
      }
    }
  }
  
  aboutDescriptionLists{
    data{
      attributes{
        title
        description
      }
    }
  }
  teamLists{
    data{
      id
      attributes{
        image{
          data{
            attributes{
              url
            }
          }
        }
        name
        role
        details
      }
    }
  }
  testimonialCards {
      data {
        id
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


const AboutContext = ({ children }) => {
    const { loading, error, data } = useQuery(AboutInfo)
    return (
        <AboutData.Provider value={{ loading, error, data }}>
            {children}
        </AboutData.Provider>
    )
}

export default AboutContext;

export const AboutState = () => {
    return useContext(AboutData)
}