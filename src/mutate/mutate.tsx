import { useState } from "react";
import { useMutation } from "react-query";
import { getHomePost } from "../service/post.service";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const useMutateProducts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const mutation = useMutation(getHomePost,
    {
      onSuccess: (data: any) => {
        setPosts(data.products);
      },
      onError: (error: AxiosError) => {
        toast.error(
          (error?.response?.data as { error: string }).error ||
            "Xatolik yuz berdi"
        );
      },
    }
  );

  return { mutation, posts };
};
