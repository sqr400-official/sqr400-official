/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./Verification.module.css";
import { useNavigate } from "react-router-dom";
import { formatTime } from "../utils/factions";
import Loader from "./Loader";

const Verification = ({ buyerInfo, product, id }) => {
  const [countdown, setCountdown] = useState(600); // Start from 60 seconds
  const navigate = useNavigate();

  useEffect(() => {
    if (countdown === 0) return; // Stop countdown at 0

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval
  }, [countdown]);

  if (countdown === 0) {
    navigate(`/product/${id}/check-out/verify`);
  }

  return (
    <main className={styles.verifyContainer}>
      <div className={styles.verifyHeader}>
        <h1 className={styles.buyerName}>{buyerInfo.name}</h1>
        <p className={styles.paymentText}>
          You are paying <span className={styles.amount}>${product.price}</span>{" "}
          for a new <span className={styles.productName}>{product.name}</span>
        </p>
        <p className={styles.warning}>⚠️ Please do not refresh this page.</p>
        <div className={styles.loading}>
          <Loader />
        </div>
        <p className={styles.countdownText}>
          ⏳ Payment expires in{" "}
          <span className={styles.timer}>{formatTime(countdown)}</span>
        </p>
        <p className={styles.countdownText}>
          <span className={styles.timer}>Please, complete your payment within the time limit.</span>
        </p>
      </div>
    </main>
  );
};

export default Verification;
