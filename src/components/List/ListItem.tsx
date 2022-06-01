import { ArrowRight } from 'react-feather';

export default function ListItem({
  children,
  ordered,
  ...rest
}: React.LiHTMLAttributes<HTMLLIElement> & { ordered?: boolean; children: React.ReactNode }) {
  if (ordered)
    return (
      <li className="my-1.5" {...rest}>
        <span className="ml-1">{children}</span>
      </li>
    );

  return (
    <li className="flex my-1.5" {...rest}>
      <span data-list-item className="mr-2">
        <ArrowRight className="text-info dark:text-dark-info" />
      </span>
      {children}
    </li>
  );
}
