import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createPostApi,
  deletePostApi,
  getPostApi,
  getPostByIdApi,
} from "./postsApi";
import { QUERY_KEYS } from "../../constants/queryKeys";
import toast from "react-hot-toast";

export const useGetPost = () => {
  const {
    isLoading: isLoadingPost,
    data: posts,
    error,
  } = useQuery({
    queryKey: [QUERY_KEYS.POSTS],
    queryFn: getPostApi,
  });

  return { posts, isLoadingPost, error };
};

export const useGetPostById = (id) => {
  const { isLoading, data, error } = useQuery({
    queryKey: [QUERY_KEYS.POST, id],
    queryFn: () => getPostByIdApi(id),
  });

  return { data, isLoading, error };
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  const { mutate: createPost, isLoading: isCreatingPost } = useMutation({
    mutationFn: createPostApi,
    onSuccess: () => {
      toast.success("Post created successfully!");
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.POSTS });
    },
    onError: (error) => toast.error(error.message),
  });

  return { createPost, isCreatingPost };
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deletePost } = useMutation({
    mutationFn: deletePostApi,
    onSuccess: () => {
      toast.success("Post deleted successfully");
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.PostS,
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isDeleting, deletePost };
};
