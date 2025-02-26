import { Link } from "react-router-dom";
import styles from "./Posts.module.css";
import Footer from "../components/Footer";
import HeadNav from "../components/HeadNav";
import Loader from "../components/Loader";
import MessageBox from "../components/MessageBox";
import { truncate } from "../utils/factions";
import SearchBox from "../components/SearchBox";
import { usePosts } from "../hooks/usePosts";
import useFetchWithCoolDown from "../hooks/useFetchWithCoolDown";
import { useEffect } from "react";

const Posts = () => {
  const { fetchPosts, posts, postsLoading, query } = usePosts();
  const { fetchData } = useFetchWithCoolDown(fetchPosts);

  useEffect(() => {
    fetchData(); // Fetch data on mount if allowed
  }, [fetchData]);

  const filteredPosts = query.trim()
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      )
    : posts;

  return (
    <>
      <HeadNav />
      <div className={styles.postsContainer}>
        <div className={styles.allPostsHeader}>
          <h1>Posts</h1>
          <SearchBox />
        </div>

        <div className={styles.postsContainerInner}>
          {/* Show Loader when loading */}
          {postsLoading && (
            <div className={styles.loaderContainer}>
              <Loader />
            </div>
          )}

          {/* Show "No posts found" when there are no posts at all */}
          {!postsLoading && posts.length === 0 && (
            <p className={styles.noPostFound}>No posts found</p>
          )}

          {/* Show "Query not found" only if posts exist but search returns nothing */}
          {!postsLoading && posts.length > 0 && filteredPosts.length === 0 && (
            <p className={styles.noPostFound}>Query not found</p>
          )}

          {/* Render posts */}
          {!postsLoading &&
            filteredPosts.length > 0 &&
            filteredPosts.map((post, index) => (
              <Link to={`/blog/${post.id}`} key={index}>
                <h2>{truncate(post.title, 23)}</h2>
                <img src={post.coverImage} alt={post.title} />
                <p className={styles.meta}>
                  <span>{post.author}</span>
                  <time dateTime={post.createdAt.toISOString()}>
                    {post.createdAt.toDateString()}
                  </time>
                </p>
                <p>{truncate(post.excerpt, 150)}</p>
              </Link>
            ))}
        </div>
      </div>
      <MessageBox />
      <Footer />
    </>
  );
};

export default Posts;
