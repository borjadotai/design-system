import { CalloutProps } from './Callout.types';
import { getVariantIcon } from './utils';
import { ReactNode } from 'react';

export default function Callout(props: CalloutProps) {
  const { children, label, variant, ...rest } = props;

  const colorStyles =
    variant === 'info'
      ? 'bg-info-soft border-brand dark:border-dark-brand dark:bg-dark-info-soft'
      : 'bg-danger-soft border-danger dark:border-dark-danger dark:bg-dark-danger-soft';
  const labelStyles = variant === 'info' ? 'bg-brand dark:bg-dark-brand' : 'bg-danger dark:bg-dark-danger';
  const iconStyles = variant === 'info' ? 'bg-brand dark:bg-dark-brand' : 'bg-danger dark:bg-dark-danger';

  const icon = label ? null : getVariantIcon(variant);
  const IconWrapper = ({ icon }: { icon: ReactNode }) => (
    <div
      className={`absolute flex -top-6 -right-4 rounded-full p-2 border-8 border-background dark:border-dark-background text-background dark:text-dark-background ${iconStyles}`}
    >
      {icon}
    </div>
  );

  const LabelWrapper = ({ label }: { label: ReactNode }) => (
    <div
      className={`absolute flex -top-6 -right-4 rounded-md p-2 select-none font-medium text-background dark:text-dark-background ${labelStyles}`}
    >
      {label}
    </div>
  );

  return (
    <aside className={`mt-8 relative p-8 border rounded-md ${colorStyles}`} {...rest}>
      {icon && <IconWrapper icon={icon} />}
      {label && <LabelWrapper label={label} />}
      {children}
    </aside>
  );
}
