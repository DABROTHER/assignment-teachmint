import Typography from 'design-systems/Atoms/Typography';
import Card from 'design-systems/Molecules/Card';
import HomePageCardInfo from 'design-systems/Organisms/CardInfo/HomePageCardInfo';
import { FC } from 'react';
import { HomePageTemplateProps } from './interface';
import CardSkeleton from 'design-systems/Molecules/Skeleton/CardSkeleton';
import HomeSkeletonCardInfo from 'design-systems/Molecules/Skeleton/SkeletonCardInfo/HomeSkeletonCardInfo';
import { generateEmptyArray } from 'utils/helper';

const HomePageTemplate: FC<HomePageTemplateProps> = ({ usersData, isLoading }) => {
  return (
    <Card className='border m-2' variant='none'>
      <Typography size='subtitle' className='p-4'>
        Directory
      </Typography>
      <div className='mx-4 mb-0 flex flex-col gap-2'>
        {isLoading
          ? generateEmptyArray(10).map((_, i) => (
              <CardSkeleton
                key={i}
                className='relative h-12 w-full rounded-xs flex'
                variant='all'
                // eslint-disable-next-line react/no-children-prop
                children={<HomeSkeletonCardInfo />}
              />
            ))
          : usersData.map(({ name, postCount, id }, i) => (
              <Card
                key={i}
                variant='all'
                className='border smd:h-12 h-16 w-full cursor-pointer bg-[#CBE2F3] hover:bg-[#a8d4f5]'
                borderSize='xs'
                direction='x-direction'
                href={`/${id}`}
                linkCss='cursor:pointer'
                // eslint-disable-next-line react/no-children-prop
                children={<HomePageCardInfo name={name} post={postCount} />}
              />
            ))}
      </div>
    </Card>
  );
};
export default HomePageTemplate;
