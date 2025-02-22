import products from "../../data/data";
import Carousel from "../components/Carousel";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import HeadNav from "../components/HeadNav";
import Hero from "../components/Hero";
import MessageBox from "../components/MessageBox";
import StickyComponent from "../components/StickyComponent";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <>
      <HeadNav />

      <main>
        <Hero products={products} />
        <FeaturedProducts products={products} />
        <Carousel />
        <Testimonials />
        <MessageBox />
      </main>
      <StickyComponent />
      <Footer />
    </>
  );
};

export default HomePage;
