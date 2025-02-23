import Carousel from "../components/Carousel";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import HeadNav from "../components/HeadNav";
import Hero from "../components/Hero";
import MessageBox from "../components/MessageBox";
import StickyComponent from "../components/StickyComponent";
import Testimonials from "../components/Testimonials";
import { useProductContext } from "../contexts/ProductContext";

const HomePage = () => {
  const { products } = useProductContext();

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
