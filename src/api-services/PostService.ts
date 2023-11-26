import { API_ENDPOINTS } from 'utils/api-integration';
import CoreAPIService from './CoreAPIService';

class PostService {
  getPost = async () => {
    const URl = 'https://jsonplaceholder.typicode.com';
    return CoreAPIService.get<PostDetailsList[]>(`${URl}${API_ENDPOINTS.PUBLIC.GET_POSTS}`);
  };
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new PostService();
