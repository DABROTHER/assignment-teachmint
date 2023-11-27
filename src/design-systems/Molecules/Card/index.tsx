import { FC } from 'react';
import { CardProps } from './interface';
import { getBorderRadius, getTransform } from './utils';
import Link from 'design-systems/Atoms/Link';

const Card: FC<CardProps> = ({
  children,
  className,
  direction,
  variant = 'all',
  borderSize,
  href = '',
  scroll = false,
  linkCss = 'cursor-default',
  isLink = true,
}) => {
  const borderRadius = getBorderRadius(variant, borderSize);
  const cardDirection = getTransform(direction);
  return (
    <div
      className={`${
        direction != 'z-direction' && cardDirection
      } relative rounded-xs border-neutral-100  ${className}  flex flex-col ${borderRadius}  opacity-100`}
    >
      {isLink ? (
        <Link href={href} scroll={scroll} className={linkCss}>
          {children}
        </Link>
      ) : (
        children
      )}
    </div>
  );
};
export default Card;
