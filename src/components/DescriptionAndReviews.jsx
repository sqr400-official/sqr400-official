import { NavLink, Outlet } from "react-router-dom";
import styles from "./DescriptionAndReviews.module.css";

const DescriptionAndReviews = () => {


  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <NavLink
          to={`description`}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
          end
        >
          Description
        </NavLink>
        <NavLink
          to={`reviews`}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
          end
        >
          Reviews
        </NavLink>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default DescriptionAndReviews;
