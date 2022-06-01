import { ReactNode } from 'react';

type Colors = 'info' | 'success' | 'warning' | 'danger';

const sharedStyles = 'px-2 py-1 rounded-md text-sm font-medium h-fit w-fit';

const generateColorStyles = (color: Colors) => {
  switch (color) {
    case 'info':
      return 'text-info dark:text-dark-info bg-info-soft dark:bg-dark-info-soft';
    case 'success':
      return 'text-success dark:text-dark-success bg-success-soft dark:bg-dark-success-soft';
    case 'warning':
      return 'text-warning dark:text-dark-warning bg-warning-soft dark:bg-dark-warning-soft';
    case 'danger':
      return 'text-danger dark:text-dark-danger bg-danger-soft dark:bg-dark-danger-soft';
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
