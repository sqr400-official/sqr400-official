import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";

const Carousel = () => {
  const settings = {
    dots: false, // No need for dots in an icon carousel
    arrows: false, // Remove navigation arrows
    infinite: true,
    speed: 3000, // Increase speed for smoother effect
    slidesToShow: 5, // Default for desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: false,
    cssEase: "linear", // Ensures smooth scrolling effect
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // Mobile (Portrait)
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480, // Small phones
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const images = [
    "/assets/icons/100%-best.jpg",
    "/assets/icons/satisfactory.jpg",
    "/assets/icons/money-back.jpg",
    "/assets/icons/24-7-costumer.jpg",
    "/assets/icons/grunge_quality.jpg",
    "/assets/icons/best-quality.jpg",
    "/assets/icons/approved.jpg",
    "/assets/icons/best-stars.jpg",
    "/assets/icons/premium_certified_quality_stamp.jpg",
  ];

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.carouselDiv}>
            <img
              src={image}
              alt={`Logo ${index + 1}`}
              className={styles.carouselImg}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
