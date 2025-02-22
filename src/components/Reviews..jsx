import { useParams } from "react-router-dom";
import products from "../../data/data";
import reviewsData from "../../data/reviews";
import ReviewCard from "./ReviewCard";
import WriteAReview from "./WriteAReview";
import { useState } from "react";
const Reviews = () => {
  const [reviews, setReviews] = useState(reviewsData);
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const handleAddReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <h2>Customer Reviews</h2>

      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
      <WriteAReview onSubmit={handleAddReview} />
    </div>
  );
};

export default Reviews;
