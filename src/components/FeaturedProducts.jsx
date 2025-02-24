/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./FeaturedProducts.module.css";
const FeaturedProducts = ({ products }) => {
  const targetId = 1;
  const specificProduct = products.find((product) => product.id === targetId);

  if (!specificProduct) {
    return <p>Product not found.</p>;
  }

  return (
    <section className={styles.FeaturedProductsContainer}>
      <div className={styles.productCard}>
        <img
          src={`${import.meta.env.BASE_URL.replace(/\/?$/, "/")}images/${
            specificProduct.image
          }`}
          alt={specificProduct.name}
          loading="lazy"
        />
        <div className={styles.productInfoDiv}>
          <h2>
            <Link to={`/product/${specificProduct.id}`}>
              {specificProduct.name}
            </Link>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
