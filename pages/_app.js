import '../styles/main.scss'
import Header from "../components/global/Header/Header"

function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
  </>
}

export default MyApp
