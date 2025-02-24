import { Link } from "react-router-dom";
import styles from "./Posts.module.css";
import Footer from "../components/Footer";
import HeadNav from "../components/HeadNav";
import Loader from "../components/Loader";
import MessageBox from "../components/MessageBox";
import { truncate } from "../utils/factions";
import { usePostContext } from "../contexts/PostContext";
import { useEffect } from "react";

const Posts = () => {
  const { fetchPosts, posts, postsLoading } = usePostContext();

  useEffect(() => {
    if (posts.length === 0) {
      fetchPosts();
    }
  }, []);

  return (
    <>
      <HeadNav />
      <div className={styles.postsContainer}>
        <h1>Posts</h1>
        {postsLoading ? (
          <div className={styles.loaderContainer}>
            <Loader />
          </div>
        ) : (
          posts.length === 0 && (
            <p className={styles.noPostFound}>No posts found</p>
          )
        )}
        {posts.map((post, index) => (
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
      <MessageBox />
      <Footer />
    </>
  );
};

export default Posts;
