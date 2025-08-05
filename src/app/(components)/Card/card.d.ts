import { ImageProps } from 'next/image';

import { ReactNode } from 'react';

interface CardProps {
  image: ImageProps<string>;

  title: string;

  subtitle: string;

  description: ReactNode;
}
