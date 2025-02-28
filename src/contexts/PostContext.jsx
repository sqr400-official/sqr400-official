/* eslint-disable react/prop-types */
import { createContext, useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// JSONBin.io API Details (Replace these with your actual API key and bin ID)
const API_KEY = "$2a$10$k/LgPNKLzYr17gRUDVAAeO9Sps1CZth0Qa2UrPFuumMztps/rV8G6"; // 🔥 Replace with your JSONBin API Key
const BIN_ID = "67bc82c9e41b4d34e49ac8d6"; // 🔥 Replace with your JSONBin Bin ID

// Create Context
export const PostContext = createContext();

// Initial Post Structure
const initialPost = {
  id: uuidv4(),
  title: "",
  author: "admin",
  createdAt: new Date().toISOString(),
  coverImage: "",
  excerpt: "",
  content: "",
};

// Provider Component
export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [newEntry, setNewEntry] = useState(initialPost);
  const [postsLoading, setPostsLoading] = useState(false);

  const [query, setQuery] = useState("");

  const fetchPosts = useCallback(async () => {
    setPostsLoading(true);
    try {
      const response = await fetch(
        `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`,
        {
          headers: { "X-Master-Key": API_KEY },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch posts");

      const data = await response.json();
      const formattedPosts = data.record.posts.map((post) => ({
        ...post,
        createdAt: new Date(post.createdAt), // Convert string to Date object
      }));

      setPosts(formattedPosts);
      console.log("request meade")
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setPostsLoading(false);
    }
  }, []);

  // Add a New Post
  const handleAdd = async () => {
    try {
      const updatedPosts = [newEntry, ...posts];

      const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": API_KEY,
        },
        body: JSON.stringify({ posts: updatedPosts }),
      });

      if (!response.ok) throw new Error("Failed to save post");

      // Notify clients about the new post
      localStorage.setItem("newPostAvailable", "true");
      setPosts(updatedPosts); // Update UI immediately
      setNewEntry(initialPost);
      return true;
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Filter out the post to be deleted
      const updatedPosts = posts.filter((post) => post.id !== id);

      // Update JSONBin with the modified posts list
      const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": API_KEY,
        },
        body: JSON.stringify({ posts: updatedPosts }),
      });

      if (!response.ok) throw new Error("Failed to delete post");

      setPosts(updatedPosts); // Update UI immediately
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleEdit = async (id, updatedPost) => {
    try {
      if (!updatedPost.title.trim() || !updatedPost.content.trim()) {
        console.error("Title and content cannot be empty.");
        return false;
      }

      // Find and update the post
      const updatedPosts = posts.map((post) =>
        post.id === id ? { ...post, ...updatedPost } : post
      );

      const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": API_KEY,
        },
        body: JSON.stringify({ posts: updatedPosts }),
      });

      if (!response.ok) throw new Error("Failed to update post");

      // Notify clients about the update
      localStorage.setItem("newPostAvailable", "true");
      setPosts(updatedPosts); // Update UI immediately
      return true;
    } catch (error) {
      console.error("Error editing post:", error);
      return false;
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
        newEntry,
        setNewEntry,
        handleAdd,
        initialPost,
        fetchPosts,
        postsLoading,
        handleDelete,
        query,
        setQuery,
        handleEdit,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
