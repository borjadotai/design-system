import { ReactNode } from 'react';

type Colors = 'info' | 'success' | 'warning' | 'danger';

const sharedStyles = 'px-2 py-1 rounded-md text-sm font-medium h-fit w-fit';

const generateColorStyles = (color: Colors) => {
  switch (color) {
    case 'info':
      return 'text-info dark:text-dark-info bg-info-emphasis dark:bg-dark-info-emphasis';
    case 'success':
      return 'text-success dark:text-dark-success bg-success-emphasis dark:bg-dark-success-emphasis';
    case 'warning':
      return 'text-warning dark:text-dark-warning bg-warning-emphasis dark:bg-dark-warning-emphasis';
    case 'danger':
      return 'text-danger dark:text-dark-danger bg-danger-emphasis dark:bg-dark-danger-emphasis';
  }
};

export default function Pill({
  type,
  className = '',
  children,
}: {
  type: Colors;
  className?: string;
  children: ReactNode;
}) {
  return <span className={`${sharedStyles} ${generateColorStyles(type)} ${className}`}>{children}</span>;
}
