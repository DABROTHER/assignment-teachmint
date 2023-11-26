import CountriesService from 'api-services/CountriesService';
import { useQuery } from 'react-query';
import { QUERIES } from 'utils/api-integration';

export const useTimeZone = (zone: string) => {
  const { isLoading: isLoadingTime, data: timeZone } = useQuery(
    [QUERIES.PUBLIC.GET_COUNTRIES, zone],
    () => CountriesService.getCountriesTimeZone(zone),
    {
      select: (res) => res,
      enabled: Boolean(zone),
      refetchOnWindowFocus: false,
    }
  );
  return {
    isLoadingTime,
    timeZone,
  };
};
