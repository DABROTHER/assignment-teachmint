import { UrlObject } from 'design-systems/Molecules/Card/interface';

export interface LinkProps {
  className?: string;
  href?: string | UrlObject;
  scroll?: boolean;
  children?: React.ReactNode;
}
