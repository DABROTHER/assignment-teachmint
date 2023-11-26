import { BorderRadiusVariant } from 'design-systems/Molecules/Card/utils';
import React from 'react';

export interface CardSkeletonProps {
  className?: string;
  children?: React.ReactNode;
  variant?: BorderRadiusVariant;
  cardClassName?: string;
}
