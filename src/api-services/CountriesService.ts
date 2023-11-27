import { API_ENDPOINTS } from 'utils/api-integration';
import CoreAPIService from './CoreAPIService';

const URl = 'https://worldtimeapi.org/api';
class CountriesService {
  getCountries = () => {
    return CoreAPIService.get<string[]>(`${URl}${API_ENDPOINTS.PUBLIC.GET_COUNTRIES}`);
  };
  getCountriesTimeZone = (timeZone: string) => {
    return CoreAPIService.get<CountriesTimezoneResponse>(`${URl}${API_ENDPOINTS.PUBLIC.GET_COUNTRIES}/${timeZone}`);
  };
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new CountriesService();
