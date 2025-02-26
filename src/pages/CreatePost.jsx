import { useState } from "react";
import styles from "./CreatePost.module.css";
import Toast from "../components/Toast";
import SuccessModal from "../components/SuccessModal";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";

const CreatePost = () => {
  const { newEntry, setNewEntry, initialPost, handleAdd } = usePosts();
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newEntry.title.trim() || !newEntry.content.trim()) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
      return;
    }

    const success = await handleAdd(); // Wait for handleAdd to complete

    if (success) {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate("/admin/all-posts"); // Navigate after modal disappears
        window.location.reload(); // Refresh the page to see the new post
      }, 2000); // Shorter delay for better UX

      setNewEntry(initialPost);
    }
  };

  return (
    <>
      <div className={styles.createPostContainer}>
        <h2>Create New Post</h2>

        <form onSubmit={handleSubmit} className={styles.createPostForm}>
          <div className={styles.postFormGroup}>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={newEntry.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.postFormGroup}>
            <label>Excerpt:</label>
            <input
              type="text"
              name="excerpt"
              value={newEntry.excerpt}
              onChange={handleChange}
            />
          </div>

          <div className={styles.postFormGroup}>
            <label>Cover Image URL:</label>
            <input
              type="text"
              name="coverImage"
              value={newEntry.coverImage}
              onChange={handleChange}
            />
          </div>

          <div className={styles.postFormGroup}>
            <label>Content:</label>
            <textarea
              name="content"
              value={newEntry.content}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.postSubmitBtn}>
            Add Post
          </button>
        </form>
        {showToast && (
          <Toast message="Title and Content are required!" type="warning" />
        )}
        {showModal && (
          <SuccessModal
            message="Post Created Successfully!"
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </>
  );
};

export default CreatePost;
