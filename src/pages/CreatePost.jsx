import { useState } from "react";
import { usePostContext } from "../contexts/PostContext";
import styles from "./CreatePost.module.css";
import Toast from "../components/Toast";
import HeadNav from "../components/HeadNav";
import Footer from "../components/Footer";
import SuccessModal from "../components/SuccessModal";

const CreatePost = () => {
  const { newEntry, setNewEntry, initialPost, handleAdd } = usePostContext();
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
    await handleAdd();
    setShowModal(true);
    setTimeout(() => setShowModal(false), 5000);
    setNewEntry(initialPost);
  };

  return (
    <>
      <HeadNav />
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
      <Footer />
    </>
  );
};

export default CreatePost;
