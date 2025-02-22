/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './Hero.module.css'

const Hero = ({products}) => {
  const product = products.slice(-1)[0];

  return (
    <section className={styles.hero}>
      <h2>Best Flashing Software</h2>
      <p>Buy top-rated software at unbeatable prices.</p>
      <Link to={`/product/${product.id}`}>Git It Now!</Link>
    </section>
  );
};

export default Hero;
