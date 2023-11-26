import { API_ENDPOINTS } from 'utils/api-integration';
import CoreAPIService from './CoreAPIService';

class UserService {
  getUsers = async () => {
    const URl = 'https://jsonplaceholder.typicode.com';
    return CoreAPIService.get<UserDetailsResponse>(`${URl}${API_ENDPOINTS.PUBLIC.GET_USERS}`);
  };
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();
