import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

export const usePosts = () => {
  const context = useContext(PostContext);
  console.log("we really gets here")
  if (!context) {
    throw new Error("usePosts must be used within a PostContext provider");
  }
  return context;
};
