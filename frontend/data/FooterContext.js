import { createContext, useContext } from "react";
import { useQuery, gql } from "@apollo/client";

const FooterData = createContext();

const FooterInformation = gql`
query GetFooterInfo {
  footer{
    data{
      attributes{
        location
        phone
        email
      }
    }
  }
}
`;

const FooterContext = ({ children }) => {
  const { loading, error, data } = useQuery(FooterInformation);

  return <FooterData.Provider value={{ loading, error, data }}>
    {children}
  </FooterData.Provider>;
};

export default FooterContext;

export const FooterState = () => {
  return useContext(FooterData);
};
