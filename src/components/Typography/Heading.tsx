import { HasChildren } from './Typography.types';

export function H1({ children, className = '' }: HasChildren) {
  return <h1 className={`text-3xl font-semibold leading-10 ${className}`}>{children}</h1>;
}

export function H2({ children, className = '' }: HasChildren) {
  return <h2 className={`text-2xl font-semibold leading-9 ${className}`}>{children}</h2>;
}

export function H3({ children, className = '' }: HasChildren) {
  return <h3 className={`text-xl font-semibold leading-8 ${className}`}>{children}</h3>;
}

export function H4({ children, className = '' }: HasChildren) {
  return <h4 className={`text-lg font-semibold leading-7 ${className}`}>{children}</h4>;
}
