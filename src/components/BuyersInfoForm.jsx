/* eslint-disable react/prop-types */
import styles from "./BuyersInfoForm.module.css";

const BuyersInfoForm = ({ buyerInfo, setBuyerInfo }) => {
  return (
    <form className={styles.buyerInfoContainer}>
      <label>Buyer Name:</label>
      <input
        type="text"
        value={buyerInfo.name}
        onChange={(e) => setBuyerInfo({ ...buyerInfo, name: e.target.value })}
        required
      />
      <label>Email:</label>
      <input
        type="text"
        value={buyerInfo.email}
        required
        onChange={(e) => setBuyerInfo({ ...buyerInfo, email: e.target.value })}
      />
    </form>
  );
};

export default BuyersInfoForm;
