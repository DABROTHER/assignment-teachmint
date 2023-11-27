'use client';
import Typography from 'design-systems/Atoms/Typography';
import Card from 'design-systems/Molecules/Card';
import UserDetailsHeader from 'design-systems/Organisms/UserDetailsHeader';
import { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { UserDetailTemplateProps } from './interface';
import UseDetailsCardList from 'design-systems/Organisms/UseDetailsCardList';
import CardSkeleton from 'design-systems/Molecules/Skeleton/CardSkeleton';
import DataNotFound from 'design-systems/Molecules/DataNotFound';
import { generateEmptyArray } from 'utils/helper';

const UserDetailTemplate: FC<UserDetailTemplateProps> = ({ id, countries, isLoadingCountries }) => {
  const {
    user: { userList },
    post: { postList },
  } = useSelector((state: any) => state);

  const userData = useMemo(() => {
    if (userList) {
      return userList?.find((data: UserDetailsList) => Number(id) === data?.id);
    }
  }, [id, userList]);

  const postData = useMemo(() => {
    if (postList) return postList?.filter((data: PostDetailsList) => Number(id) === data?.userId);
  }, [id, postList]);
  return (
    <Card className='border m-2 text-neutral-100' variant='none' isLink={false}>
      <UserDetailsHeader countries={countries} isLoadingCountries={isLoadingCountries} />
      <Typography size='subtitle' className='md:mt-0 mt-6'>
        Profile Page
      </Typography>
      <Card className='border m-8 min-h-4' variant='all'>
        <div className='flex flex-col md:flex-row gap-4 justify-between p-4 items-center'>
          {isLoadingCountries ? (
            generateEmptyArray(2).map((_, j) => (
              <div className='flex flex-col w-full md:w-[20%]' key={j}>
                <div className='flex w-full p-4'>
                  <CardSkeleton className='relative h-4 w-full rounded-xs flex' variant='all' />
                </div>
                <div className='flex flex-row gap-2 w-full'>
                  {generateEmptyArray(2).map((_, i) => (
                    <CardSkeleton key={i} className='relative h-2 w-full rounded-xs flex' variant='all' />
                  ))}
                </div>
              </div>
            ))
          ) : userData ? (
            <>
              <div className='flex flex-col '>
                <Typography className='flex '>{userData?.name}</Typography>
                <div className='flex flex-row gap-2'>
                  <Typography className='flex'>{userData?.username}</Typography> |
                  <Typography className='flex'>{userData?.company?.catchPhrase}</Typography>
                </div>
              </div>
              <div className='flex flex-col'>
                <Typography className='flex'>{`${userData?.address?.city}, ${userData?.address?.street}`}</Typography>
                <div className='flex flex-row gap-2'>
                  <Typography className='flex'>{userData?.email}</Typography> |
                  <Typography className='flex'>{userData?.phone}</Typography>
                </div>
              </div>
            </>
          ) : (
            <DataNotFound className='h-20 items-center !text-[37px]' size='paragraph' text='No Data Found' />
          )}
        </div>
      </Card>

      <UseDetailsCardList data={postData} isLoadingCountries={isLoadingCountries} />
    </Card>
  );
};
export default UserDetailTemplate;
