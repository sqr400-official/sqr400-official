import { useState } from "react";
import styles from "./Checkout.module.css";
import HeadNav from "../components/HeadNav";
import products from "../../data/data";
import { Link, useNavigate, useParams } from "react-router-dom";
import BuyersInfoForm from "../components/BuyersInfoForm";
import Verification from "../components/Verification";
import Toast from "../components/Toast";
import wallets from "../../data/wallets";


const Checkout = () => {
  const [buyerInfo, setBuyerInfo] = useState({ name: "", email: "" });
  const [selectedWalletChain, setSelectedWalletChain] = useState(
    wallets[0].chain
  );
  const [showToast, setShowToast] = useState(false);

  const [isVerifying, setIsVerifying] = useState(false);
  const [enteredInfo, setEnteredInfo] = useState(false);
  const [copied, setCopied] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    navigate("/");
  }

  // Find the full wallet object based on the selected chain
  const selectedWallet = wallets.find(
    (wallet) => wallet.chain === selectedWalletChain
  );

  // Copy to clipboard function
  const handleCopy = () => {
    if (selectedWallet?.address) {
      navigator.clipboard.writeText(selectedWallet.address);
      setCopied(true);

      // Reset "Copied!" message after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const disableNextBtn =
    buyerInfo.name === "" ||
    buyerInfo.name.length < 2 ||
    buyerInfo.email === "" ||
    !buyerInfo.email.includes("@");

  return (
    <>
      <HeadNav />
      <main>
        <Link to={`/product/${product.id}`} className={styles.goBack}>
          Back
        </Link>

        {!isVerifying ? (
          <div className={styles.checkoutContainer}>
            <div className={styles.productInfo}>
              <img src={`/assets/images/${product.image}`} alt={product.name} />
            </div>
            <div className={styles.payment}>
              {enteredInfo && (
                <button
                  onClick={() => setEnteredInfo(false)}
                  className={styles.backBtn}
                >
                  Back
                </button>
              )}
              <div className={styles.paymentInner}>
                {enteredInfo ? (
                  <>
                    <label htmlFor="walletSelect">Select Payment Method:</label>
                    <select
                      id="walletSelect"
                      value={selectedWalletChain}
                      onChange={(e) => setSelectedWalletChain(e.target.value)}
                    >
                      {wallets.map((wallet) => (
                        <option key={wallet.chain} value={wallet.chain}>
                          {wallet.chain}
                        </option>
                      ))}
                    </select>

                    <p>Selected Wallet: {selectedWallet?.chain}</p>

                    <p className={styles.copiedText} onClick={handleCopy}>
                      {selectedWallet?.address}
                      <br />
                      📋
                    </p>

                    {copied && (
                      <p style={{ color: "green", fontWeight: "bold" }}>
                        Copied!
                      </p>
                    )}
                  </>
                ) : (
                  <BuyersInfoForm
                    buyerInfo={buyerInfo}
                    setBuyerInfo={setBuyerInfo}
                  />
                )}
                {enteredInfo ? (
                  <button
                    className={styles.buyButton}
                    onClick={() => setIsVerifying(true)}
                  >
                    Proceed
                  </button>
                ) : (
                  <button
                    className={`${
                      disableNextBtn
                        ? `${styles.buyButton} ${styles.disabled}`
                        : styles.buyButton
                    }`}
                    onClick={() => {
                      if (disableNextBtn) {
                        setShowToast(true);
                        setTimeout(() => setShowToast(false), 5000);
                      } else {
                        setEnteredInfo(true);
                      }
                    }}
                  >
                    Next
                  </button>
                )}
                {showToast && (
                  <Toast
                    message="You need to complete the form!"
                    type="warning"
                  />
                )}
              </div>
            </div>
          </div>
        ) : (
          <Verification id={id} product={product} buyerInfo={buyerInfo} />
        )}
      </main>
    </>
  );
};

export default Checkout;
