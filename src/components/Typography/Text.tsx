import { HasChildren, TextProps } from './Typography.types';

function DisplayText({ children, className = '' }: HasChildren) {
  return <p className={`text-lg font-normal ${className}`}>{children}</p>;
}

function NumericText({ children, className = '' }: HasChildren) {
  return <p className={`text-base font-normal font-numeric ${className}`}>{children}</p>;
}

function MonoText({ children, className = '' }: HasChildren) {
  return <p className={`text-base font-normal font-mono ${className}`}>{children}</p>;
}

function StrongText({ children, className = '' }: HasChildren) {
  return <strong className={`text-base font-semibold ${className}`}>{children}</strong>;
}

function ItalicText({ children, className = '' }: HasChildren) {
  return <em className={`text-base font-normal italic ${className}`}>{children}</em>;
}

function GradientText({ children, className = '' }: HasChildren) {
  return <p className={`w-fit text-base font-normal text-transparent bg-clip-text ${className}`}>{children}</p>;
}

export default function Text({ gradient, italic, strong, mono, numeric, children, className }: TextProps) {
  if (mono) return <MonoText className={className}>{children}</MonoText>;
  if (strong) return <StrongText className={className}>{children}</StrongText>;
  if (italic) return <ItalicText className={className}>{children}</ItalicText>;
  if (numeric) return <NumericText className={className}>{children}</NumericText>;
  if (gradient) return <GradientText className={className}>{children}</GradientText>;
  return <DisplayText className={className}>{children}</DisplayText>;
}
