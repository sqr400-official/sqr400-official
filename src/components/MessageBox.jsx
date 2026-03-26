import { whatsapp } from "../../data/number";
import styles from "./MessageBox.module.css";
import { IoLogoWhatsapp } from "react-icons/io";
const MessageBox = () => {
  return (
    <aside className={styles.asideBox}>
      <a href={whatsapp} target="blank" className={styles.messageBox}>
        <IoLogoWhatsapp />
      </a>
    </aside>
  );
};

export default MessageBox;
