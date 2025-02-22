/* eslint-disable react/prop-types */
import styles from "./FeaturedProducts.module.css";
const FeaturedProducts = ({ products }) => {
  const recentProducts = products.slice(-1);

  return (
    <section className={styles.FeaturedProductsContainer}>
      {recentProducts.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <img
            src={`${import.meta.env.BASE_URL}/images/${product.image}`}
            alt={product.name}
          />
          <div className={styles.productInfoDiv}>
            <h2>{product.name}</h2>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturedProducts;
