import React, { useContext } from "react";
import { createContext } from "react";
import { useQuery, gql } from "@apollo/client";

const ContactData = createContext()

const ContactInfo = gql`
query GetContact {
contact{
  data{
    attributes{
      page_title
      contact_description
      head_q_location
    }
  }
}
  
  contactLists{
    data{
      id
      attributes{
        name
        location
        email
      }
    }
  }
}
`

const ContactContext = ({ children }) => {
    const { loading, error, data } = useQuery(ContactInfo)
    return (
        <ContactData.Provider value={{ loading, error, data }}>
            {children}
        </ContactData.Provider>
    )
}

export default ContactContext

export const ContactState = () => {
    return useContext(ContactData)
}