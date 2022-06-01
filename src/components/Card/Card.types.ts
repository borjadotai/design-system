import { ReactNode } from 'react';

export interface CardProps {
  header?: ReactNode;
  depth?: 1 | 2 | 3 | 4;
  transparent?: boolean;
  children: ReactNode;
}
