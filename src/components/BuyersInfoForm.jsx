/* eslint-disable react/prop-types */
import styles from "./BuyersInfoForm.module.css";

const BuyersInfoForm = ({ buyerInfo, setBuyerInfo, os, setOs }) => {
  return (
    <form className={styles.buyerInfoContainer}>
      <div className={styles.InfoDiv}>
        <label>Buyer Name:</label>
        <input
          type="text"
          value={buyerInfo.name}
          onChange={(e) => setBuyerInfo({ ...buyerInfo, name: e.target.value })}
          required
        />
      </div>
      <div className={styles.InfoDiv}>
        <label>Email:</label>
        <input
          type="text"
          value={buyerInfo.email}
          required
          onChange={(e) =>
            setBuyerInfo({ ...buyerInfo, email: e.target.value })
          }
        />
      </div>

      <div className={styles.InfoDiv}>
        <label>Select your operating system:</label>
        <select
          value={os}
          onChange={(e) => setOs(e.target.value)}
          required
          className={styles.osSelect}
        >
          <option value="Windows">Windows</option>
          <option value="MacOS">MacOS</option>
          <option value="Linux">Linux</option>
        </select>
      </div>
    </form>
  );
};

export default BuyersInfoForm;
