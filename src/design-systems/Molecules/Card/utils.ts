export type BorderRadiusVariant = 'all' | 'top' | 'bottom' | 'none';
export type BorderRadiusVariantSize = 'sm' | 'xs' | 'md';
export type TransformVariant = 'x-direction' | 'y-direction' | 'z-direction' | undefined;
export const getBorderRadius = (variant: BorderRadiusVariant, size: BorderRadiusVariantSize = 'sm'): string => {
  const borderRadiusClasses: Record<BorderRadiusVariant, string> = {
    all: `!rounded-${size}`,
    top: `rounded-tl-${size} rounded-tr-${size}`,
    bottom: `rounded-bl-${size} rounded-br-${size}`,
    none: '!rounded-none',
  };

  if (variant in borderRadiusClasses) {
    return borderRadiusClasses[variant];
  } else {
    throw new Error('Invalid Button variant: ' + variant);
  }
};

export const getTransform = (variant: TransformVariant) => {
  switch (variant) {
    case 'x-direction':
      return 'card-shadow';
    case 'y-direction':
      return 'transform card-shadow';
    case 'z-direction':
      return 'transform hover:scale-110 transition-transform duration-300 group-hover:scale-110';
    default:
      return '';
  }
};
