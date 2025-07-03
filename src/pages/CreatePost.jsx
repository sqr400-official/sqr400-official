import { useState } from "react";
import styles from "./CreatePost.module.css";
import Toast from "../components/Toast";
import SuccessModal from "../components/SuccessModal";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useCreatePost } from "../features/posts/postMutations";

const CreatePost = () => {
  const { createPost, isCreatingPost } = useCreatePost();
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const [newEntry, setNewEntry] = useState({
    id: uuidv4(),
    title: "",
    author: "admin",
    createdAt: new Date().toISOString(),
    coverImage: "",
    excerpt: "",
    content: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newEntry.title.trim() || !newEntry.content.trim()) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
      return;
    }

    createPost(newEntry, {
      onSuccess: () => {
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          navigate("/admin/all-posts"); // Navigate after modal disappears
        }, 2000);

        setNewEntry({
          id: uuidv4(),
          title: "",
          author: "admin",
          createdAt: new Date().toISOString(),
          coverImage: "",
          excerpt: "",
          content: "",
        });
      },
    });
  };

  return (
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

        <button type="submit" className={styles.postSubmitBtn} disabled={isCreatingPost}>
          {isCreatingPost ? "Creating..." : "Add Post"}
        </button>
      </form>

      {showToast && <Toast message="Title and Content are required!" type="warning" />}
      {showModal && <SuccessModal message="Post Created Successfully!" onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default CreatePost;
