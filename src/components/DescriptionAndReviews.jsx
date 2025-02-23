import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import styles from "./DescriptionAndReviews.module.css";
import { useEffect } from "react";

const DescriptionAndReviews = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  useEffect(() => {
    // Redirect to "description" ONLY if the user is at "product/:id"
    if (location.pathname.endsWith(`/product/${id}`)) {
      navigate("description", { replace: true });
    }
  }, [location.pathname, navigate, id]);

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <NavLink
          to={`description`}
          end
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
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
