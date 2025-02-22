/* eslint-disable react/prop-types */
import styles from "./ReviewCard.module.css";
import { FaStar, FaRegStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.userInfo}>
        <div className={styles.avatar}>
          <img
            src={`${import.meta.env.BASE_URL}images/avatar.jpg`}
            alt="Avatar"
          />
        </div>
        <div>
          <strong>{review.name}</strong> – {review.date}
        </div>
      </div>
      <p className={styles.reviewText}>{review.comment}</p>
      <div className={styles.rating}>
        {[...Array(5)].map((_, i) =>
          i < review.rating ? (
            <FaStar key={i} className={styles.star} />
          ) : (
            <FaRegStar key={i} className={styles.star} />
          )
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
