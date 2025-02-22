import { useParams } from "react-router-dom";
import products from "../../data/data";
import styles from "./Description.module.css";

const Description = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className={styles.description}>
      <h2>Description</h2>
      <p className={styles.productDescription}>
        {product.description.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
};

export default Description;
