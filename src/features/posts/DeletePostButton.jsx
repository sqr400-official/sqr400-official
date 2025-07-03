/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePosts, fetchPosts } from "../api/postApi";

const DeletePostButton = ({ postId }) => {
  const queryClient = useQueryClient();

  const deletePostMutation = useMutation({
    mutationFn: async (id) => {
      const posts = await fetchPosts();
      const updatedPosts = posts.filter((post) => post.id !== id);
      await updatePosts(updatedPosts);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  return (
    <button onClick={() => deletePostMutation.mutate(postId)}>
      {deletePostMutation.isLoading ? "Deleting..." : "Delete"}
    </button>
  );
};

export default DeletePostButton;
