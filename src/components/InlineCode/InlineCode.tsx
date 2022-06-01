import { InlineCodeProps } from './InlineCode.types';

const InlineCode = (props: InlineCodeProps) => {
  return (
    <code className="font-mono leading-6 rounded-lg bg-foreground dark:bg-dark-foreground px-1.5 py-0.5 text-base break-words border dark:border-dark-emphasis shadow-sm text-blue-50 dark:text-blue-30">
      {props.children}
    </code>
  );
};

export default InlineCode;
