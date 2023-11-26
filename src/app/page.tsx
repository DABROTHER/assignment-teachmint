'use client';
import HomePageTemplate from 'design-systems/Templates/HomePageTemplate';
import { useHome } from 'hooks/apis';
import { useToggle } from 'hooks/useToggle';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  const [isAPI, , turn, ,] = useToggle(false);

  const { isHomePageLoading, data } = useHome(isAPI);
  const {
    user: { userList },
  } = useSelector((state: any) => state);

  const homeData = useMemo(() => {
    const hasUserList = userList && userList.length;
    turn(!hasUserList);
    return {
      data: hasUserList ? userList : data,
      isLoading: hasUserList ? false : isHomePageLoading,
    };
  }, [userList, data, isHomePageLoading]);

  return <HomePageTemplate usersData={homeData?.data} isLoading={homeData?.isLoading} />;
}
