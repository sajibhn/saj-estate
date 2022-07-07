import "../styles/main.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Header from "../components/global/Header/Header";
import Footer from "../components/global/Footer/Footer";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import FooterContext from "../data/FooterContext";
import Head from "next/head";

const client = new ApolloClient({
  uri: "https://dry-brook-90780.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <Head>
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <title>Saj Estate | Get Your Perfect Home</title>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
        </Head>
        <Component {...pageProps} />
        <FooterContext>
          <Footer />
        </FooterContext>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
