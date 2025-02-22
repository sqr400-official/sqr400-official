import testimonials from "../../data/testimonials";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonialsContainer}>
        {testimonials.map((item) => (
          <div key={item.id} className={styles.testimonialCard}>
            <p>{item.text}</p>
            <h5> {item.author}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
