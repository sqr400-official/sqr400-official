import { FaTelegramPlane } from "react-icons/fa";
import styles from "./MessageBox.module.css";
const MessageBox = () => {
  return (
    <aside className={styles.asideBox}>
      <a href="https://t.me/sqr400_official" target="blank" className={styles.messageBox}>
        <FaTelegramPlane />
      </a>
    </aside>
  );
};

export default MessageBox;
