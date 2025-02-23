import { Link, useParams } from "react-router-dom";
import styles from "./ProductSingle.module.css";
import HeadNav from "../components/HeadNav";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import DescriptionAndReviews from "../components/DescriptionAndReviews";
import Footer from "../components/Footer";
import StickyComponent from "../components/StickyComponent";
import RelatedProducts from "../components/RelatedProducts";
import { useProductContext } from "../contexts/ProductContext";
import { useEffect } from "react";

const ProductSingle = () => {
  const { id } = useParams();
  const { products, reviews } = useProductContext();
  const productId = Number(id);

  // Find the selected product
  const product = products.find((p) => p.id === productId);

  // Find reviews for the selected product
  const productReviews = reviews.find((r) => r.productId === productId)?.reviews || [];


  const numberOfReviews = productReviews.length;
  const averageRating =
    productReviews.reduce((acc, review) => acc + review.rating, 0) /
    productReviews.length;

  const formattedRating = averageRating.toFixed(2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
                src={`${import.meta.env.BASE_URL.replace(/\/?$/, "/")}images/${
                  product.image
                }`}
                alt={product.name}
                className={styles["product-image"]}
                loading="lazy"
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
        <section className={styles.descriptionAndReviews}>
          <RelatedProducts />
        </section>
      </main>
      <StickyComponent />
      <Footer />
    </>
  );
};

export default ProductSingle;
