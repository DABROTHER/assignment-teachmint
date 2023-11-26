/* eslint-disable react/no-children-prop */
import { getBorderRadius } from 'design-systems/Molecules/Card/utils';
import { CardSkeletonProps } from './interface';

import Skeleton from 'design-systems/Atoms/Skeleton';

const CardSkeleton: React.FC<CardSkeletonProps> = ({ className, children, variant = 'all', cardClassName }) => {
  const borderRadius = getBorderRadius(variant, 'xs');
  return (
    <div className={`${className} ${borderRadius} flex w-full flex-col `}>
      <div className={`relative flex h-full w-full flex-col ${cardClassName}  ${borderRadius}`}>
        <div className={`h-full w-full flex ${borderRadius}`}>
          <Skeleton className={`${borderRadius} rounded-xs`}></Skeleton>
        </div>
      </div>
      {children}
    </div>
  );
};
export default CardSkeleton;
