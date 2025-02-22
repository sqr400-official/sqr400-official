import products from "../../data/data";
import ProductCard from "./ProductCard";
import styles from "./RelatedProducts.module.css";

const RelatedProducts = () => {
  // Get the last 3 products (assuming products are sorted from oldest to newest)
  const recentProducts = products.slice(-3);


  return (
    <div className={styles.related}>
      <h2 >Related Products</h2>
      <div className={styles.productsGrid}>
          {recentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

    </div>
  );
};

export default RelatedProducts;
