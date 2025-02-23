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
    `best-100.jpg`,
    `satisfactory.jpg`,
    `money-back.jpg`,
    `24-7-costumer.jpg`,
    `grunge_quality.jpg`,
    `best-quality.jpg`,
    `approved.jpg`,
    `best-stars.jpg`,
    `premium_certified_quality_stamp.jpg`,
  ];

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.carouselDiv}>
            <img
              src={`${import.meta.env.BASE_URL.replace(
                /\/?$/,
                "/"
              )}icons/${image}`}
              alt={image}
              className={styles.carouselImg}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
