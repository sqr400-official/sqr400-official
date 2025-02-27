import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./CreatePost.module.css";
import Toast from "../components/Toast";
import SuccessModal from "../components/SuccessModal";
import { usePosts } from "../hooks/usePosts";

const EditPost = () => {
  const { posts, handleEdit } = usePosts();
  const { id } = useParams(); // Get post ID from URL
  const navigate = useNavigate();

  const postToEdit = posts.find((post) => post.id === id);
  const [postData, setPostData] = useState(
    postToEdit || {
      title: "",
      excerpt: "",
      coverImage: "",
      content: "",
    }
  );

  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (postToEdit) {
      setPostData(postToEdit);
    }
  }, [postToEdit]);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!postData.title.trim() || !postData.content.trim()) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
      return;
    }

    const success = await handleEdit(id, postData); // Pass ID and updated post

    if (success) {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate("/admin/all-posts");
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <div className={styles.createPostContainer}>
      <h2>Edit Post</h2>

      <form onSubmit={handleSubmit} className={styles.editPostForm}>
        <div className={styles.postFormGroup}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={postData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.postFormGroup}>
          <label>Excerpt:</label>
          <input
            type="text"
            name="excerpt"
            value={postData.excerpt}
            onChange={handleChange}
          />
        </div>

        <div className={styles.postFormGroup}>
          <label>Cover Image URL:</label>
          <input
            type="text"
            name="coverImage"
            value={postData.coverImage}
            onChange={handleChange}
          />
        </div>

        <div className={styles.postFormGroup}>
          <label>Content:</label>
          <textarea
            name="content"
            value={postData.content}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.postSubmitBtn}>
          Update Post
        </button>
      </form>

      {showToast && (
        <Toast message="Title and Content are required!" type="warning" />
      )}

      {showModal && (
        <SuccessModal
          message="Post Updated Successfully!"
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default EditPost;
