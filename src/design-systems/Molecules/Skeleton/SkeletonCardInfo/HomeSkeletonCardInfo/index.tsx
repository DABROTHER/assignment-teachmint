import Skeleton from 'design-systems/Atoms/Skeleton';
import { FC } from 'react';
import { generateEmptyArray } from 'utils/helper';
import { HomeSkeletonCardInfoProps } from './interface';

const HomeSkeletonCardInfo: FC<HomeSkeletonCardInfoProps> = ({ className, skeltonCSS, noOfInnerSkelton = 2 }) => {
  return (
    <div className={`absolute w-full flex justify-between p-4 items-center ${className} `}>
      {generateEmptyArray(noOfInnerSkelton).map((_, i) => (
        <Skeleton key={i} className={`!w-20 !h-4 rounded-xs ${skeltonCSS}`}></Skeleton>
      ))}
    </div>
  );
};
export default HomeSkeletonCardInfo;
