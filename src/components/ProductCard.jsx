/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { truncate } from "../utils/factions";

const ProductCard = ({ product }) => {
  // Truncate the description to 20 characters for better readability
  const truncatedDesc = truncate(product.description, 20);
  const truncatedTitle = truncate(product.name, 20);

  return (
    <div className={styles.productCard}>
      <Link to={`/product/${product.id}`}>
        <div className={styles.info}>
          <h2>{truncatedTitle}</h2>
          <p>{truncatedDesc}</p>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}images/${product.image}`}
          alt={product.name}
        />
        <div className={styles.action}>
          <p className={styles.price}>${product.price}</p>
          <p className={styles.rating}>⭐ {product.rating}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
