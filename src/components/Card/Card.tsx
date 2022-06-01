import { CardProps } from './Card.types';

export default function Card({ header, transparent, depth, children }: CardProps) {
  const shared = `${
    transparent ? 'bg-transparent' : 'bg-white dark:bg-gray-88'
  } rounded-md border border-soft dark:border-dark-soft`;

  const shadow =
    depth === 1
      ? 'drop-shadow-sm'
      : depth === 2
      ? 'drop-shadow'
      : depth === 3
      ? 'drop-shadow-md'
      : depth === 4
      ? 'drop-shadow-lg'
      : '';

  if (header)
    return (
      <div className={`${shared} ${shadow}`}>
        <div className="border-b border-soft dark:border-dark-soft px-4 py-2">{header}</div>
        <div className="p-4">{children}</div>
      </div>
    );

  return <div className={`${shared} p-4 ${shadow}`}>{children}</div>;
}
