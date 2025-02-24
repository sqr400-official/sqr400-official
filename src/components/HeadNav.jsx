import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HeadNav.module.css";
import Logo from "./Logo";
import { FaTelegramPlane } from "react-icons/fa";

const HeadNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.headNav}>
      <nav className={styles.nav}>
        <div className={styles["nav-container"]}>
          <Logo />
          {/* Toggle Button */}
          <button
            className={styles["nav-toggle"]}
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Navigation Links */}
          <ul
            className={`${styles["nav-links"]} ${
              isOpen ? styles["show-menu"] : ""
            }`}
          >
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a
                href="https://t.me/official_sqr400"
                target="_blank"
                rel="noreferrer"
              >
                Community <FaTelegramPlane />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeadNav;
