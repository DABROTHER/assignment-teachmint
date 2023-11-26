import Typography from 'design-systems/Atoms/Typography';
import { FC } from 'react';
import { HomePageCardInfoProps } from './interface';

const HomePageCardInfo: FC<HomePageCardInfoProps> = ({ name, post }) => {
  return (
    <div className='w-full flex justify-between p-4 items-center'>
      <Typography className='gap-1 flex'>Name: {name}</Typography>
      <Typography>Posts: {post}</Typography>
    </div>
  );
};
export default HomePageCardInfo;
