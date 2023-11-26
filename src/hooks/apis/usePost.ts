import PostService from 'api-services/PostService';
import { useQuery } from 'react-query';
import { QUERIES } from 'utils/api-integration';

export const usePost = (isAPI: boolean) => {
  const { isLoading: isLoadingPosts, data: posts } = useQuery([QUERIES.PUBLIC.GET_POSTS], () => PostService.getPost(), {
    select: (res) => res,
    enabled: Boolean(isAPI),
    refetchOnWindowFocus: false,
  });
  return {
    isLoadingPosts,
    posts,
  };
};
