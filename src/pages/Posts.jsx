import { Link } from "react-router-dom";
import posts from "../../data/posts";
import styles from "./Posts.module.css";
import Footer from "../components/Footer";
import HeadNav from "../components/HeadNav";

const Posts = () => {
  return (
    <>
      <HeadNav />
      <div className={styles.postsContainer}>
        <h1>Posts</h1>
        {posts.map((post, index) => (
          <Link to={`/blog/${post.id}`} key={index}>
            <h2>{post.title}</h2>
            <img src={post.coverImage} alt={post.title} />
            <p className={styles.meta}>
              <span>{post.author}</span>
              <time dateTime={post.createdAt.toISOString()}>
                {post.createdAt.toDateString()}
              </time>
            </p>
            <p>{post.excerpt}</p>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Posts;
