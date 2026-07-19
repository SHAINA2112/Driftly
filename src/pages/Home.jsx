import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import DestinationsPreview from "../components/Destinations/DestinationsPreview";
import PackagesPreview from "../components/Packages/PackagePreview";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import GalleryPreview from "../components/Gallery/GalleryPreview";
import Newsletter from "../components/NewsLetter/NewsLetter";
import Testimonials from "../components/Testemonials/Testimonials";
import Contact from "../components/Contact/Contact";
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <DestinationsPreview />
      <PackagesPreview />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <Newsletter />
      <Contact />
    </>
  );
};
export default Home;
