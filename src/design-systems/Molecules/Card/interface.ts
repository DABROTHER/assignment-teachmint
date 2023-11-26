import { BorderRadiusVariant, BorderRadiusVariantSize, TransformVariant } from './utils';

export interface CardProps {
  className?: string;
  children?: React.ReactNode;
  variant?: BorderRadiusVariant;
  borderSize?: BorderRadiusVariantSize;
  direction?: TransformVariant;
  scroll?: boolean;
  href?: string | UrlObject;
  linkCss?: string;
  isLink?: boolean;
}
export interface UrlObject {
  auth?: string | null | undefined;
  hash?: string | null | undefined;
  host?: string | null | undefined;
  hostname?: string | null | undefined;
  href?: string | null | undefined;
  pathname?: string | null | undefined;
  protocol?: string | null | undefined;
  search?: string | null | undefined;
  slashes?: boolean | null | undefined;
  port?: string | number | null | undefined;
  query?: string | null | undefined | AnyObject;
}
