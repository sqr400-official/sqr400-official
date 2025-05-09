/* eslint-disable react/prop-types */
import styles from "./ErrorComponent.module.css";
import Footer from "./Footer";
import StickyComponent from "./StickyComponent";

const ErrorComponent = ({ onClick, error, message, icon, btnMsg }) => {
  return (
    <>
      <main className={styles.verifyPageContainer}>
        <img
          src={`${import.meta.env.BASE_URL.replace(/\/?$/, "/")}icons/${icon}`}
          alt="cancel"
          loading="lazy"
        />
        <h1>{error}</h1>
        <p>{message}</p>
        <button onClick={onClick}>{btnMsg}</button>
      </main>
      <StickyComponent />
      <Footer />
    </>
  );
};

export default ErrorComponent;
