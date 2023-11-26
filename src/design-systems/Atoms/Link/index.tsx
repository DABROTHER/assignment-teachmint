import NextLink from 'next/link';
import { FC } from 'react';
import { LinkProps } from './interface';
const Link: FC<LinkProps> = ({ href = '', scroll, className, children }) => {
  return (
    <NextLink className={`flex h-full w-full flex-col ${className}`} draggable={false} href={href} scroll={scroll}>
      {children}
    </NextLink>
  );
};
export default Link;
