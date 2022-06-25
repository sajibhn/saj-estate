import Cta from "../components/home/Cta";
import Hero from "../components/home/Hero";
import Listings from "../components/home/Listings";
import Process from "../components/home/Process";
import Testimonial from "../components/home/testimonial/Testimonial";
import HomeContext from "../data/HomeContext";

export default function Home() {
  return (
    <>
      <HomeContext>
        <Hero />
        <Process />
        <Listings />
        <Cta />
        <Testimonial />
      </HomeContext>

    </>
  )
}