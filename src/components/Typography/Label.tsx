import { HasChildren } from './Typography.types';

export default function Label({ children, className = '' }: HasChildren) {
  return <p className={`text-gray-60 dark:text-gray-40 font-medium ${className}`}>{children}</p>;
}
