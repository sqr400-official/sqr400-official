/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./Verification.module.css";
import { useNavigate } from "react-router-dom";
import { formatTime } from "../utils/factions";
import Loader from "./Loader";

const Verification = ({
  buyerInfo,
  product,
  id,
  selectedWallet,
  copied,
  handleCopy,
}) => {
  const [countdown, setCountdown] = useState(360); // Default 10 minutes
  const navigate = useNavigate();

  useEffect(() => {
    // Start a fresh timer when the component mounts
    setCountdown(countdown); // Reset countdown on refresh

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate(`/product/${id}/check-out/verify`);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [navigate, id]);

  return (
    <>
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
        <p className={styles.toCopiedText} onClick={handleCopy}>
          {selectedWallet?.chain}
          <br />
          {selectedWallet?.address}
          <br />
          📋
        </p>
        <p className={styles.countdownText}>
          ⏳ Payment expires in{" "}
          <span className={styles.timer}>{formatTime(countdown)}</span>
        </p>
        <p className={styles.countdownText}>
          <span className={styles.timer}>
            Please, complete your payment within the time limit.
          </span>
        </p>

        {copied && (
          <p style={{ color: "green", fontWeight: "bold" }}>Copied!</p>
        )}
      </div>
    </main>
    </>
  );
};

export default Verification;
