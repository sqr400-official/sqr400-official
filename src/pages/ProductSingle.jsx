import { Link, useParams } from "react-router-dom";
import styles from "./ProductSingle.module.css";
import products from "../../data/data";
import HeadNav from "../components/HeadNav";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import DescriptionAndReviews from "../components/DescriptionAndReviews";
import Footer from "../components/Footer";
import reviewsData from "../../data/reviews";
import StickyComponent from "../components/StickyComponent";

const ProductSingle = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const numberOfReviews = reviewsData.length;
  const averageRating =
    reviewsData.reduce((acc, review) => acc + review.rating, 0) /
    reviewsData.length;

  const formattedRating = averageRating.toFixed(2);

  if (!product) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Product not found
      </h2>
    );
  }

  return (
    <>
      <HeadNav />
      <main>
        <section className={styles["product-container"]}>
          <div className={styles["product-card"]}>
            {/* Product Image */}
            <div className={styles["image-container"]}>
              <img
                src={`/assets/images/${product.image}`}
                alt={product.name}
                className={styles["product-image"]}
              />
            </div>

            {/* Product Details */}
            <div className={styles["product-details"]}>
              <h1 className={styles["product-title"]}>{product.name}</h1>

              <div className={styles["price-rating"]}>
                <p className={styles["product-price"]}>
                  ${product.price.toFixed(2)}
                </p>
                <p className={styles["product-rating"]}>
                  {Array.from({ length: Math.round(product.rating) }).map(
                    (_, i) => (
                      <FaStar key={i} color="#FFD700" />
                    )
                  )}
                </p>
              </div>

              <div className={styles.reviewsData}>
                <p className={styles.averageRating}>
                  <strong>{formattedRating}</strong>
                </p>

                <p className={styles["product-category"]}>
                  <strong>{numberOfReviews}</strong> reviews
                </p>
              </div>
              <p className={styles["product-stock"]}>
                {product.stock > 0 ? (
                  <span className={styles["in-stock"]}>
                    In Stock ({product.stock})
                  </span>
                ) : (
                  <span className={styles["out-of-stock"]}>Out of Stock</span>
                )}
              </p>

              <div className={styles["buttons-container"]}>
                <Link
                  to={`/product/${product.id}/check-out`}
                  className={styles["buy-button"]}
                >
                  <FaShoppingCart /> Buy Now
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.descriptionAndReviews}>
          <DescriptionAndReviews />
        </section>
      </main>
      <StickyComponent />
      <Footer />
    </>
  );
};

export default ProductSingle;
