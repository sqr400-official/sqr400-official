// src/api/postApi.js
const API_KEY = "$2a$10$k/LgPNKLzYr17gRUDVAAeO9Sps1CZth0Qa2UrPFuumMztps/rV8G6";
const BIN_ID = "67bc82c9e41b4d34e49ac8d6";
const API_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

export const getPostApi = async () => {
  const response = await fetch(`${API_URL}/latest`, {
    headers: { "X-Master-Key": API_KEY },
  });

  if (!response.ok) throw new Error("Failed to fetch posts");

  const data = await response.json();

  // Ensure that `data.record.posts` is always an array
  return Array.isArray(data.record?.posts) ? data.record.posts : [];
};

export const createPostApi = async (newPost) => {
  const posts = await getPostApi();
  const updatedPosts = [newPost, ...posts];

  const response = await fetch(API_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": API_KEY,
    },
    body: JSON.stringify({ posts: updatedPosts }),
  });

  if (!response.ok) throw new Error("Failed to create post");
};

export const updatePostApi = async (id, updatedPost) => {
  const posts = await getPostApi();
  const updatedPosts = posts.map((post) =>
    post.id === id ? { ...post, ...updatedPost } : post
  );

  const response = await fetch(API_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": API_KEY,
    },
    body: JSON.stringify({ posts: updatedPosts }),
  });

  if (!response.ok) throw new Error("Failed to update post");
};


export const getPostByIdApi = async (id) => {
  const posts = await getPostApi(); // Fetch all posts
  return posts.find((post) => post.id === id) || null; // Return the post or null if not found
};


export const deletePostApi = async (id) => {
  const posts = await getPostApi(); // Fetch all posts
  const updatedPosts = posts.filter((post) => post.id !== id); // Remove the selected post

  const response = await fetch(API_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": API_KEY,
    },
    body: JSON.stringify({ posts: updatedPosts }),
  });

  if (!response.ok) throw new Error("Failed to delete post");
};
