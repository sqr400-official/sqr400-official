/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./WriteAReview.module.css";
import { FaStar } from "react-icons/fa";

const WriteAReview = ({ onSubmit }) => {
  const [name, setName] = useState("Anonymous");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment || rating === 0) {
      alert("Please fill in all fields.");
      return;
    }

    const newReview = {
      name,
      date: new Date().toLocaleDateString(),
      comment,
      rating,
    };

    onSubmit(newReview);
    setName("");
    setComment("");
    setRating(0);
    setHover(0);
  };

  return (
    <div className={styles.reviewForm}>
      <h3>Write a Review</h3>
      <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled
            className={styles.inputField}
          />

          {/* Star Rating */}
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => {
              const ratingValue = i + 1;
              return (
                <label key={i}>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                  />
                  <FaStar
                    className={styles.star}
                    size={20}
                    color={ratingValue <= (hover || rating) ? "orange" : "#ccc"}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                  />
                </label>
              );
            })}
          </div>
          {/* Comment Input */}
          <textarea
            placeholder="Write your review..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className={styles.textarea}
          ></textarea>
  
          {/* Submit Button */}
          <button type="submit" className={styles.submitButton}>
            Submit Review
          </button>
      </form>
    </div>
  );
};

export default WriteAReview;
