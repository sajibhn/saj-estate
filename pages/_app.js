import '../styles/main.scss'
import Header from "../components/global/Header/Header"
import Footer from '../components/global/Footer/Footer'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import FooterContext from '../data/FooterContext'

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }) {
  return <>
    <ApolloProvider client={client}>
      <Header />
      <Component {...pageProps} />
      <FooterContext>
        <Footer />
      </FooterContext>
    </ApolloProvider>
  </>
}

export default MyApp
