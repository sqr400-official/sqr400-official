import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HeadNav.module.css";
import Logo from "./Logo";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import { IoLogoWhatsapp } from "react-icons/io";

const HeadNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

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
                href="https://whatsapp.com/channel/0029Vb5f2o411ulOL0TbKW26"
                target="_blank"
                rel="noreferrer"
              >
                Community <IoLogoWhatsapp />
              </a>
            </li>
            {isAuthenticated && (
              <>
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
                <li>
                  <button className={styles.mobileLogout} onClick={logout}>
                    Logout
                    <FaSignOutAlt  />
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeadNav;
