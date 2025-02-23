import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import WriteAReview from "./WriteAReview";
import { useProductContext } from "../contexts/ProductContext";

const Reviews = () => {
  const { reviews, setReviews, products } = useProductContext();
  const { id } = useParams();
  const productId = Number(id);

  // Find the selected product
  const product = products.find((p) => p.id === productId);

  // Find reviews for the selected product
  const productReviews = reviews.find((r) => r.productId === productId)?.reviews || [];

  // Handle adding a new review
  const handleAddReview = (newReview) => {
    setReviews((prevReviews) => {
      return prevReviews.map((r) =>
        r.productId === productId
          ? { ...r, reviews: [...r.reviews, newReview] } // Add review to correct product
          : r
      );
    });
  };

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <h2>Reviews for {product.name}</h2>

      {productReviews.length > 0 ? (
        productReviews.map((review, index) => <ReviewCard key={index} review={review} />)
      ) : (
        <p>No reviews yet. Be the first to review this product!</p>
      )}

      <WriteAReview onSubmit={handleAddReview} />
    </div>
  );
};

export default Reviews;
