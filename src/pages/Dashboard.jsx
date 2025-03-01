import React, { useEffect } from "react";
import styles from "./Dashboard.module.css";
import { usePosts } from "../hooks/usePosts";
import useFetchWithCoolDown from "../hooks/useFetchWithCoolDown";

const Dashboard = () => {
  const { fetchPosts, posts, postsLoading, handleDelete, query } = usePosts();
  const { fetchData } = useFetchWithCoolDown(fetchPosts);

  useEffect(() => {
    fetchData(); // Fetch data on mount if allowed
  }, [fetchData]);

  const numOfPosts = posts ? posts.length : 0;
  return (
    <div className={styles.dashboardContainer}>
      <h1>Admin Dashboard</h1>
      <div className={styles.dashboardGrid}>
        <div className={styles.dashboardCard}>
          <h2>Posts</h2>
          <p>Total Posts: {postsLoading ? "Loading..." : numOfPosts}</p>
          <p>Pending Posts: 15</p>
        </div>
        <div className={styles.dashboardCard}>
          <h2>Products</h2>
          <p>Total Products: 300</p>
          <p>Out of Stock: 5</p>
        </div>
        <div className={styles.dashboardCard}>
          <h2>Users</h2>
          <p>Total Users: 1500</p>
          <p>Active Users: 1400</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
