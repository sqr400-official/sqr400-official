/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import styles from "./SuccessModal.module.css"; // Import CSS for styling

const SuccessModal = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose(); // Call the function to remove the modal
    }, 5000); // Disappears after 5 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <p>{message || "Action Successful!"}</p>
      </div>
    </div>
  );
};

export default SuccessModal;
