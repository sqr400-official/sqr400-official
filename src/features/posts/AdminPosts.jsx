import { Link } from "react-router-dom";
import ConfirmationModal from "../../components/ConfirmationModal";
import { useDeletePost, useGetPost } from "./postMutations";
import styles from "./AdminPosts.module.css";
import SearchBox from "../../components/SearchBox";
import Spinner from "../../Spinner";
import { truncate } from "../../utils/factions";
import { useState } from "react";
const AdminPosts = () => {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null); // ✅ Store post ID

  const { posts = [], isLoadingPost } = useGetPost();
  const { isDeleting, deletePost } = useDeletePost();

  const filteredPosts = query.trim()
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      )
    : posts;

  return (
    <>
      {showModal && (
        <ConfirmationModal
          onConfirm={async () => {
            await deletePost(selectedPostId);
            setShowModal(false);
          }}
          disabled={isDeleting}
          onCancel={() => setShowModal(false)}
        >
          Delete this post?
        </ConfirmationModal>
      )}
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
              <div className={styles.adminPostCard} key={index}>
                <h2>{truncate(post.title, 20)}</h2>
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

export default AdminPosts;
