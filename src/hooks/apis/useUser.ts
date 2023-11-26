import userService from 'api-services/userService';
import { useQuery } from 'react-query';
import { QUERIES } from 'utils/api-integration';

export const useUser = (isAPI: boolean) => {
  const { isLoading: isLoadingUsers, data: users } = useQuery(
    [QUERIES.PUBLIC.GET_USERS],
    () => userService.getUsers(),
    {
      select: (res) => res as unknown as UserDetailsList[],
      refetchOnWindowFocus: false,
      enabled: Boolean(isAPI),
      cacheTime: 60 * 60,
    }
  );
  return {
    isLoadingUsers,
    users: users as UserDetailsList[],
  };
};
