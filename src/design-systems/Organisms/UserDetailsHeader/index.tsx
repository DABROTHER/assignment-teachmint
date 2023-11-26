'use client';
import Button from 'design-systems/Atoms/Button';
import DropDown from 'design-systems/Molecules/DropDown';
import { FC } from 'react';
import { UserDetailsHeaderProps } from './interface';
import DigitalWatch from 'design-systems/Molecules/Timer.tsx';
import { convertIntoTimeToSecond, generateEmptyArray } from 'utils/helper';
import { useTimeZone } from 'hooks/apis/useTimezone';
import { useRouter } from 'next/navigation';
import { useToggle } from 'hooks/useToggle';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedContry } from 'store/slices/selectedContrySlice';
import CardSkeleton from 'design-systems/Molecules/Skeleton/CardSkeleton';
import HomeSkeletonCardInfo from 'design-systems/Molecules/Skeleton/SkeletonCardInfo/HomeSkeletonCardInfo';
const UserDetailsHeader: FC<UserDetailsHeaderProps> = ({ countries, isLoadingCountries }) => {
  const router = useRouter();
  const [isStartPause, toggle] = useToggle(true);
  const dispatch = useDispatch();
  const {
    selectedCountry: { selectedContry },
  } = useSelector((state: any) => state);
  const { isLoadingTime, timeZone } = useTimeZone(selectedContry);

  return (
    <>
      <div className='flex w-full p-4 md:gap-0 gap-3 justify-between items-center'>
        <Button
          className='flex h-12 w-full md:w-[15%] items-center justify-center px-3 py-4 text-center font-Poppins leading-[23.3px] r bg-[#CBE2F3] hover:bg-[#a8d4f5] -mt-1'
          onClick={() => router.push('/')}
        >
          Back
        </Button>
        <div className='hidden lmd:flex flex-row w-full ml-[10%] slg:ml-[15%] lg:ml-[20%] xlg:ml-[30%]'>
          <div className='flex flex-row items-center w-full lmd:flex'>
            {isLoadingCountries ? (
              <div className=' !w-[460px] flex'>
                <CardSkeleton
                  className='relative h-11 w-full rounded-xs flex'
                  variant='all'
                  // eslint-disable-next-line react/no-children-prop
                  children={<HomeSkeletonCardInfo skeltonCSS='!w-[200px]' />}
                />
              </div>
            ) : (
              <>
                <DropDown
                  className='-mt-6 !w-[200px] slg:w-auto'
                  data={countries as unknown as string[]}
                  defaultValue={selectedContry}
                  onChange={(data) => dispatch(setSelectedContry(data))}
                />
                <DigitalWatch
                  zoneTime={convertIntoTimeToSecond(timeZone?.datetime as string)}
                  isLoadingTime={isLoadingTime}
                  isStartPause={isStartPause}
                />
              </>
            )}
          </div>
          <Button
            className='flex h-12 w-[18%] items-center px-3 py-4 text-center font-Poppins leading-[23.3px] bg-[#CBE2F3] hover:bg-[#a8d4f5] justify-end'
            onClick={() => toggle?.()}
          >
            {isStartPause ? 'Pause' : 'Start'}
          </Button>
        </div>
        <Button
          className='lmd:hidden flex h-12 w-full md:w-[18%] items-center px-3 py-4 text-center font-Poppins leading-[23.3px] bg-[#CBE2F3] hover:bg-[#a8d4f5] justify-end'
          onClick={() => toggle?.()}
        >
          {isStartPause ? 'Pause' : 'Start'}
        </Button>
      </div>
      <div className='flex flex-col-reverse gap-10 md:flex-row lmd:hidden w-full p-4 justify-between items-center'>
        {isLoadingCountries ? (
          generateEmptyArray(2).map((_, i) => (
            <CardSkeleton
              key={i}
              className='relative h-11 w-full rounded-xs flex'
              variant='all'
              // eslint-disable-next-line react/no-children-prop
              children={
                <HomeSkeletonCardInfo
                  skeltonCSS='!w-[200px] !justify-center'
                  className='flex !justify-center'
                  noOfInnerSkelton={1}
                />
              }
            />
          ))
        ) : (
          <>
            <div className='flex w-full'>
              <DropDown
                className='ml-1 -mt-6 w-full md:!w-30'
                data={countries as string[]}
                defaultValue={selectedContry}
                onChange={(data) => dispatch(setSelectedContry(data))}
              />
            </div>
            <div className='flex'>
              <DigitalWatch
                zoneTime={convertIntoTimeToSecond(timeZone?.datetime as string)}
                isLoadingTime={isLoadingTime}
                isStartPause={isStartPause}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default UserDetailsHeader;
