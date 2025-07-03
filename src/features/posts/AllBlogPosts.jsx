import { useGetPost } from "./postMutations";
import styles from "./AllBlogPosts.module.css";
import SearchBox from "../../components/SearchBox";
import HeadNav from "../../components/HeadNav";
import Spinner from "../../Spinner";
import { Link } from "react-router-dom";
import { truncate } from "../../utils/factions";
import MessageBox from "../../components/MessageBox";
import Footer from "../../components/Footer";
import { useState } from "react";
const AllBlogPosts = () => {
  const [query, setQuery] = useState("");

  const { posts = [], isLoadingPost } = useGetPost();

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
          <SearchBox query={query} setQuery={setQuery} />
        </div>

        <div className={styles.postsContainerInner}>
          {isLoadingPost && (
            <div className={styles.loaderContainer}>
              <Spinner />
            </div>
          )}

          {!isLoadingPost && posts.length === 0 && (
            <p className={styles.noPostFound}>No posts found</p>
          )}

          {!isLoadingPost && posts.length > 0 && filteredPosts.length === 0 && (
            <p className={styles.noPostFound}>Query not found</p>
          )}

          {!isLoadingPost &&
            filteredPosts.length > 0 &&
            filteredPosts.map((post, index) => (
              <Link to={`/blog/${post.id}`} key={index}>
                <h2>{truncate(post.title, 23)}</h2>
                <img src={post.coverImage} alt={post.title} />
                <p className={styles.meta}>
                  <span>{post.author}</span>
                  <time
                    dateTime={
                      post.createdAt
                        ? new Date(post.createdAt).toISOString()
                        : ""
                    }
                  >
                    {post.createdAt
                      ? new Date(post.createdAt).toDateString()
                      : "Unknown Date"}
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

export default AllBlogPosts;
