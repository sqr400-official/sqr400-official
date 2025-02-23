import { useProductContext } from "../contexts/ProductContext";
import ProductCard from "./ProductCard";
import styles from "./RelatedProducts.module.css";

const RelatedProducts = () => {
  const { products } = useProductContext();
  const getRandomProducts = (products, count = 3) => {
    // Shuffle the products array using Fisher-Yates algorithm
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const randomProducts = getRandomProducts(products, 3);

  return (
    <div className={styles.related}>
      <h2>Related Products</h2>
      <div className={styles.productsGrid}>
        {randomProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
