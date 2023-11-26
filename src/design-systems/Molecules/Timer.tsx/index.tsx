import Typography from 'design-systems/Atoms/Typography';
import { useTimer } from 'hooks/useTimer';
import React, { useMemo } from 'react';
import { formatTime } from 'utils/helper';

const DigitalWatch: React.FC<{ zoneTime: number; isLoadingTime: boolean; isStartPause: boolean }> = ({
  zoneTime,
  isLoadingTime,
  isStartPause,
}) => {
  const { time, isRunning, startPause } = useTimer(zoneTime);
  useMemo(() => {
    startPause(isStartPause);
  }, [isStartPause]);
  return (
    <div className='flex items-center w-full'>
      <div className='bg-neutral-100 text-neutral-800 w-[150px]'>
        <Typography className='p-2 text-body text-[#0700fb]'>
          {isLoadingTime ? 'Loading...' : formatTime(time)}
        </Typography>
      </div>
    </div>
  );
};

export default DigitalWatch;
