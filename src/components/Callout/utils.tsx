import { Info, AlertOctagon } from 'react-feather';
import { CalloutVariant } from './Callout.types';

export const getVariantIcon = (variant: CalloutVariant): React.ReactNode => {
  switch (variant) {
    case 'info':
      return <Info />;
    case 'danger':
      return <AlertOctagon />;
  }
};
