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
    `${import.meta.env.BASE_URL}assets/icons/100%-best.jpg`,
    `${import.meta.env.BASE_URL}assets/icons/satisfactory.jpg`,
    `${import.meta.env.BASE_URL}assets/icons/money-back.jpg`,
    `${import.meta.env.BASE_URL}assets/icons/24-7-costumer.jpg`,
    `${import.meta.env.BASE_URL}assets/icons/grunge_quality.jpg`,
    `${import.meta.env.BASE_URL}assets/icons/best-quality.jpg`,
    `${import.meta.env.BASE_URL}assets/icons/approved.jpg`,
    `${import.meta.env.BASE_URL}assets/icons/best-stars.jpg`,
    `${import.meta.env.BASE_URL}assets/icons/premium_certified_quality_stamp.jpg`,
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
