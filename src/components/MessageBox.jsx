import styles from "./MessageBox.module.css";
import { IoLogoWhatsapp } from "react-icons/io";
const MessageBox = () => {
  return (
    <aside className={styles.asideBox}>
      <a href="https://wa.me/+15392508562" target="blank" className={styles.messageBox}>
        <IoLogoWhatsapp />
      </a>
    </aside>
  );
};

export default MessageBox;
