import { ReactNode } from 'react';

export interface HasChildren extends React.HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  gradient?: boolean;
  italic?: boolean;
  strong?: boolean;
  mono?: boolean;
  numeric?: boolean;
  className?: string;
  children: ReactNode;
}
