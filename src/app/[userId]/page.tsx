'use client';
import UserDetailTemplate from 'design-systems/Templates/UserDetailTemplate';
import { FC, useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import { useCountries } from 'hooks/apis';
import { useDispatch, useSelector } from 'react-redux';
import { setCountriesList } from 'store/slices/contriesSlice';
import { useToggle } from 'hooks/useToggle';
const UserDetails: FC = () => {
  const { userId } = useParams();
  const [isAPI, , , isAPIOn, isAPIOff] = useToggle(false);
  const { countries, isLoadingCountries } = useCountries(isAPI);
  const dispatch = useDispatch();
  const {
    country: { countriesList },
  } = useSelector((state: any) => state);
  const Countries = useMemo(() => {
    if (countriesList?.length) {
      isAPIOff?.();
      return { countries: countriesList, isLoading: false };
    }
    isAPIOn?.();
    dispatch(setCountriesList(countries));
    return { countries, isLoading: isLoadingCountries };
  }, [countriesList, countries, isLoadingCountries]);

  return (
    <UserDetailTemplate
      id={userId as string}
      countries={Countries?.countries as string[]}
      isLoadingCountries={Countries?.isLoading}
    />
  );
};
export default UserDetails;
