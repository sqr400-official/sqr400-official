/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
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

  // Fetch Posts from JSONBin.io on Load
  const fetchPosts = async () => {
    setPostsLoading(true);
    try {
      const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: { "X-Master-Key": API_KEY },
      });
  
      if (!response.ok) throw new Error("Failed to fetch posts");
  
      const data = await response.json();
      const formattedPosts = data.record.posts.map(post => ({
        ...post,
        createdAt: new Date(post.createdAt) // Convert string to Date object
      }));
  
      setPosts(formattedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setPostsLoading(false);
    }
  };
  
  // Add a New Post
  const handleAdd = async () => {
    try {
      const updatedPosts = [...posts, newEntry];

      const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": API_KEY,
        },
        body: JSON.stringify({ posts: updatedPosts }),
      });

      if (!response.ok) throw new Error("Failed to save post");

      setPosts(updatedPosts); // Update UI immediately
      setNewEntry(initialPost);
    } catch (error) {
      console.error("Error adding post:", error);
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
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

// Custom Hook for Using Context
export const usePostContext = () => {
  return useContext(PostContext);
};
