import PropTypes from "prop-types";
import styles from "./ConfirmationModal.module.css";

const ConfirmationModal = ({ children, onConfirm, onCancel }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <p>{children}</p>
        <div className={styles.modalActions}>
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

ConfirmationModal.propTypes = {
  children: PropTypes.node,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

ConfirmationModal.defaultProps = {
  children: "Are you sure?",
};

export default ConfirmationModal;
