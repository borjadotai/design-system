import { LogoProps } from './Logo.types';
import IcoLogo from './assets/favicon.ico';
import PngLogo from './assets/logo.png';
import WebpLogo from './assets/logo.webp';

export default function Logo({ format, className }: LogoProps) {
  switch (format) {
    case 'png':
      return <img src={PngLogo} alt="logo" className={className || 'w-12'} />;
    case 'ico':
      return <img src={IcoLogo} alt="logo" className={className || 'w-12'} />;
    case 'webp':
    default:
      return <img src={WebpLogo} alt="logo" className={className || 'w-12'} />;
  }
}
