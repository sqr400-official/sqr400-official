import { useEffect, useState } from "react";
import { truncate } from "../utils/factions";
import styles from "./AllPosts.module.css";
import Loader from "../components/Loader";
import SearchBox from "../components/SearchBox";
import { usePosts } from "../hooks/usePosts";
import useFetchWithCoolDown from "../hooks/useFetchWithCoolDown";
import ConfirmationModal from "../components/ConfirmationModal";
import { Link } from "react-router-dom";

const AllPosts = () => {
  const { fetchPosts, posts, postsLoading, handleDelete, query } = usePosts();
  const { fetchData } = useFetchWithCoolDown(fetchPosts);
  const [showModal, setShowModal] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null); // ✅ Store post ID

  useEffect(() => {
    fetchData(); // Fetch data on mount if allowed
  }, [fetchData]);

  const handleDeletePost = (postId) => {
    handleDelete(postId);
  };

  const filteredPosts = query.trim()
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      )
    : posts;

  return (
    <>
      {showModal && (
        <ConfirmationModal
          onConfirm={() => {
            handleDeletePost(selectedPostId); // ✅ Now `post.id` is known
            setShowModal(false);
          }}
          onCancel={() => setShowModal(false)}
        >
          Delete this post?
        </ConfirmationModal>
      )}
      <div className={styles.postsContainer}>
        <div className={styles.allPostsHeader}>
          <h1>Posts</h1>
          <SearchBox />
        </div>

        <div className={styles.postsContainerInner}>
          {postsLoading && (
            <div className={styles.loaderContainer}>
              <Loader />
            </div>
          )}

          {!postsLoading && posts.length === 0 && (
            <p className={styles.noPostFound}>No posts found</p>
          )}

          {!postsLoading && posts.length > 0 && filteredPosts.length === 0 && (
            <p className={styles.noPostFound}>Query not found</p>
          )}

          {!postsLoading &&
            filteredPosts.length > 0 &&
            filteredPosts.map((post, index) => (
              <div className={styles.adminPostCard} key={index}>
                <h2>{truncate(post.title, 20)}</h2>
                <img src={post.coverImage} alt={post.title} />
                <p className={styles.meta}>
                  <span>{post.author}</span>
                  <time dateTime={post.createdAt.toISOString()}>
                    {post.createdAt.toDateString()}
                  </time>
                </p>
                <div className={styles.adminAddPostButtons}>
                  <Link
                    to={`/admin/edit-post/${post.id}`}
                    className={styles.editButton}
                  >
                    Edit
                  </Link>
                  <button
                    className={styles.deleteButton}
                    onClick={() => {
                      setSelectedPostId(post.id); // ✅ Store the clicked post's ID
                      setShowModal(true);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AllPosts;
