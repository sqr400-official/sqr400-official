import { adminNavigation } from "../../data/navigation";
import Footer from "../components/Footer";
import HeadNav from "../components/HeadNav";
import styles from "./AdminPage.module.css";
import { Link, Outlet } from "react-router-dom"; // Assuming you're using React Router

const AdminPage = () => {
  return (
    <>
      <HeadNav />
      <div className={styles.adminContainer}>
        {/* Sidebar Navigation */}
        <aside className={styles.adminSideNav}>
          <nav>
            <ul className={styles.navList}>
              {adminNavigation.map((item, index) => (
                <li key={index} className={styles.navItem}>
                  <Link to={item.link} className={styles.navLink}>
                    <item.icon size={20} className={styles.navIcon} /> <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className={styles.adminMain}>
          <Outlet />
        </main>

        {/* Bottom Navigation for Mobile */}
        <aside className={styles.adminBottomNav}>
          <nav>
            <ul className={styles.navList}>
              {adminNavigation.map((item, index) => (
                <li key={index} className={styles.navItem}>
                  <Link to={item.link} className={styles.navLink}>
                    <item.icon size={20} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
      <Footer />
    </>
  );
};

export default AdminPage;
