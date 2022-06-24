// // Import Swiper styles
// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
import '../styles/main.scss'
import Header from "../components/global/Header/Header"
import Footer from '../components/global/Footer/Footer'

function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
