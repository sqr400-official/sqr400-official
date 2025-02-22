import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
const Logo = () => {
  return (
    <Link className={styles.logo} to="/">
      <h1>SQR400_Official</h1>
    </Link>
  );
};

export default Logo;
