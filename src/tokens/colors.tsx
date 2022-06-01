const colorSize = 'w-8 h-8 rounded-md border border-soft dark:border-dark-soft';
import { Label } from '../components/Typography';

const gradientShared = 'flex space-x-1 flex-wrap';

export const BrandColors = () => (
  <div className="flex flex-col justify-start">
    <Label>Brand</Label>
    <div className={gradientShared}>
      <div className={`${colorSize} bg-brand`} />
      <div className={`${colorSize} bg-dark-brand`} />
    </div>
  </div>
);

export const BackgroundColors = () => (
  <div className="flex flex-col justify-start">
    <Label>Background</Label>
    <div className={gradientShared}>
      <div className={`${colorSize} bg-background`} />
      <div className={`${colorSize} bg-dark-background`} />
    </div>
  </div>
);

export const BorderColors = () => (
  <div className="flex flex-col justify-start">
    <Label>Border</Label>
    <div className={gradientShared}>
      <div className={`${colorSize} bg-soft`} />
      <div className={`${colorSize} bg-dark-soft`} />
    </div>
  </div>
);

export const ForegroundColors = () => (
  <div className="flex flex-col justify-start">
    <Label>Foreground</Label>
    <div className={gradientShared}>
      <div className={`${colorSize} bg-foreground`} />
      <div className={`${colorSize} bg-dark-foreground`} />
    </div>
  </div>
);

export const PrimaryTextColors = () => (
  <div className="flex flex-col justify-start">
    <Label>Primary</Label>
    <div className={gradientShared}>
      <div className={`${colorSize} bg-primary`} />
      <div className={`${colorSize} bg-dark-primary`} />
    </div>
  </div>
);

export const SecondaryTextColors = () => (
  <div className="flex flex-col justify-start">
    <Label>Secondary</Label>
    <div className={gradientShared}>
      <div className={`${colorSize} bg-secondary`} />
      <div className={`${colorSize} bg-dark-secondary`} />
    </div>
  </div>
);

export const TerciaryTextColors = () => (
  <div className="flex flex-col justify-start">
    <Label>Terciary</Label>
    <div className={gradientShared}>
      <div className={`${colorSize} bg-terciary`} />
      <div className={`${colorSize} bg-dark-terciary`} />
    </div>
  </div>
);

export const StateColors = () => (
  <div className="flex space-x-6">
    <div>
      <Label>Success</Label>
      <div className={gradientShared}>
        <div className={`${colorSize} bg-success`} />
        <div className={`${colorSize} bg-dark-success`} />
      </div>
    </div>
    <div>
      <Label>Danger</Label>
      <div className={gradientShared}>
        <div className={`${colorSize} bg-danger`} />
        <div className={`${colorSize} bg-dark-danger`} />
      </div>
    </div>
    <div>
      <Label>Warning</Label>
      <div className={gradientShared}>
        <div className={`${colorSize} bg-warning`} />
        <div className={`${colorSize} bg-dark-warning`} />
      </div>
    </div>
    <div>
      <Label>Info</Label>
      <div className={gradientShared}>
        <div className={`${colorSize} bg-info`} />
        <div className={`${colorSize} bg-dark-info`} />
      </div>
    </div>
  </div>
);

export const StateSoftColors = () => (
  <div className="flex space-x-6">
    <div>
      <Label>Soft [S]</Label>
      <div className={gradientShared}>
        <div className={`${colorSize} bg-success-soft`} />
        <div className={`${colorSize} bg-dark-success-soft`} />
      </div>
    </div>
    <div>
      <Label>Soft [D]</Label>
      <div className={gradientShared}>
        <div className={`${colorSize} bg-danger-soft`} />
        <div className={`${colorSize} bg-dark-danger-soft`} />
      </div>
    </div>
    <div>
      <Label>Soft [W]</Label>
      <div className={gradientShared}>
        <div className={`${colorSize} bg-warning-soft`} />
        <div className={`${colorSize} bg-dark-warning-soft`} />
      </div>
    </div>
    <div>
      <Label>Soft [I]</Label>
      <div className={gradientShared}>
        <div className={`${colorSize} bg-info-soft`} />
        <div className={`${colorSize} bg-dark-info-soft`} />
      </div>
    </div>
  </div>
);

export const GrayGradient = () => (
  <div className="flex flex-col justify-start">
    <Label>Gray</Label>
    <div className={gradientShared}>
      <div className={`${colorSize} bg-gray-2`} />
      <div className={`${colorSize} bg-gray-5`} />
      <div className={`${colorSize} bg-gray-10`} />
      <div className={`${colorSize} bg-gray-15`} />
      <div className={`${colorSize} bg-gray-20`} />
      <div className={`${colorSize} bg-gray-25`} />
      <div className={`${colorSize} bg-gray-30`} />
      <div className={`${colorSize} bg-gray-35`} />
      <div className={`${colorSize} bg-gray-40`} />
      <div className={`${colorSize} bg-gray-45`} />
      <div className={`${colorSize} bg-gray-50`} />
      <div className={`${colorSize} bg-gray-55`} />
      <div className={`${colorSize} bg-gray-60`} />
      <div className={`${colorSize} bg-gray-65`} />
      <div className={`${colorSize} bg-gray-70`} />
      <div className={`${colorSize} bg-gray-75`} />
      <div className={`${colorSize} bg-gray-80`} />
      <div className={`${colorSize} bg-gray-85`} />
      <div className={`${colorSize} bg-gray-90`} />
      <div className={`${colorSize} bg-gray-95`} />
      <div className={`${colorSize} bg-gray-100`} />
    </div>
  </div>
);

export const BlueGradient = () => (
  <div className="mt-10 flex flex-col justify-start">
    <Label>Blue</Label>
    <div className={gradientShared}>
      <div className={`${colorSize} bg-blue-2`} />
      <div className={`${colorSize} bg-blue-5`} />
      <div className={`${colorSize} bg-blue-10`} />
      <div className={`${colorSize} bg-blue-15`} />
      <div className={`${colorSize} bg-blue-20`} />
      <div className={`${colorSize} bg-blue-25`} />
      <div className={`${colorSize} bg-blue-30`} />
      <div className={`${colorSize} bg-blue-35`} />
      <div className={`${colorSize} bg-blue-40`} />
      <div className={`${colorSize} bg-blue-45`} />
      <div className={`${colorSize} bg-blue-50`} />
      <div className={`${colorSize} bg-blue-55`} />
      <div className={`${colorSize} bg-blue-60`} />
      <div className={`${colorSize} bg-blue-65`} />
      <div className={`${colorSize} bg-blue-70`} />
      <div className={`${colorSize} bg-blue-75`} />
      <div className={`${colorSize} bg-blue-80`} />
      <div className={`${colorSize} bg-blue-85`} />
      <div className={`${colorSize} bg-blue-90`} />
      <div className={`${colorSize} bg-blue-95`} />
      <div className={`${colorSize} bg-blue-100`} />
    </div>
  </div>
);

export const RedGradient = () => (
  <div className="mt-10 flex flex-col justify-start">
    <Label>Red</Label>
    <div className={gradientShared}>
      <div className={`${colorSize} bg-red-2`} />
      <div className={`${colorSize} bg-red-5`} />
      <div className={`${colorSize} bg-red-10`} />
      <div className={`${colorSize} bg-red-15`} />
      <div className={`${colorSize} bg-red-20`} />
      <div className={`${colorSize} bg-red-25`} />
      <div className={`${colorSize} bg-red-30`} />
      <div className={`${colorSize} bg-red-35`} />
      <div className={`${colorSize} bg-red-40`} />
      <div className={`${colorSize} bg-red-45`} />
      <div className={`${colorSize} bg-red-50`} />
      <div className={`${colorSize} bg-red-55`} />
      <div className={`${colorSize} bg-red-60`} />
      <div className={`${colorSize} bg-red-65`} />
      <div className={`${colorSize} bg-red-70`} />
      <div className={`${colorSize} bg-red-75`} />
      <div className={`${colorSize} bg-red-80`} />
      <div className={`${colorSize} bg-red-85`} />
      <div className={`${colorSize} bg-red-90`} />
      <div className={`${colorSize} bg-red-95`} />
      <div className={`${colorSize} bg-red-100`} />
    </div>
  </div>
);

export const OrangeGradient = () => (
  <div className="mt-10 flex flex-col justify-start">
    <Label>Orange</Label>
    <div className={gradientShared}>
      <div className={`${colorSize} bg-orange-2`} />
      <div className={`${colorSize} bg-orange-5`} />
      <div className={`${colorSize} bg-orange-10`} />
      <div className={`${colorSize} bg-orange-15`} />
      <div className={`${colorSize} bg-orange-20`} />
      <div className={`${colorSize} bg-orange-25`} />
      <div className={`${colorSize} bg-orange-30`} />
      <div className={`${colorSize} bg-orange-35`} />
      <div className={`${colorSize} bg-orange-40`} />
      <div className={`${colorSize} bg-orange-45`} />
      <div className={`${colorSize} bg-orange-50`} />
      <div className={`${colorSize} bg-orange-55`} />
      <div className={`${colorSize} bg-orange-60`} />
      <div className={`${colorSize} bg-orange-65`} />
      <div className={`${colorSize} bg-orange-70`} />
      <div className={`${colorSize} bg-orange-75`} />
      <div className={`${colorSize} bg-orange-80`} />
      <div className={`${colorSize} bg-orange-85`} />
      <div className={`${colorSize} bg-orange-90`} />
      <div className={`${colorSize} bg-orange-95`} />
      <div className={`${colorSize} bg-orange-100`} />
    </div>
  </div>
);

export const GreenGradient = () => (
  <div className="mt-10 flex flex-col justify-start">
    <Label>Green</Label>
    <div className={gradientShared}>
      <div className={`${colorSize} bg-green-2`} />
      <div className={`${colorSize} bg-green-5`} />
      <div className={`${colorSize} bg-green-10`} />
      <div className={`${colorSize} bg-green-15`} />
      <div className={`${colorSize} bg-green-20`} />
      <div className={`${colorSize} bg-green-25`} />
      <div className={`${colorSize} bg-green-30`} />
      <div className={`${colorSize} bg-green-35`} />
      <div className={`${colorSize} bg-green-40`} />
      <div className={`${colorSize} bg-green-45`} />
      <div className={`${colorSize} bg-green-50`} />
      <div className={`${colorSize} bg-green-55`} />
      <div className={`${colorSize} bg-green-60`} />
      <div className={`${colorSize} bg-green-65`} />
      <div className={`${colorSize} bg-green-70`} />
      <div className={`${colorSize} bg-green-75`} />
      <div className={`${colorSize} bg-green-80`} />
      <div className={`${colorSize} bg-green-85`} />
      <div className={`${colorSize} bg-green-90`} />
      <div className={`${colorSize} bg-green-95`} />
      <div className={`${colorSize} bg-green-100`} />
    </div>
  </div>
);

export const PinkGradient = () => (
  <div className="mt-10 flex flex-col justify-start">
    <Label>Pink</Label>
    <div className={gradientShared}>
      <div className={`${colorSize} bg-pink-2`} />
      <div className={`${colorSize} bg-pink-5`} />
      <div className={`${colorSize} bg-pink-10`} />
      <div className={`${colorSize} bg-pink-15`} />
      <div className={`${colorSize} bg-pink-20`} />
      <div className={`${colorSize} bg-pink-25`} />
      <div className={`${colorSize} bg-pink-30`} />
      <div className={`${colorSize} bg-pink-35`} />
      <div className={`${colorSize} bg-pink-40`} />
      <div className={`${colorSize} bg-pink-45`} />
      <div className={`${colorSize} bg-pink-50`} />
      <div className={`${colorSize} bg-pink-55`} />
      <div className={`${colorSize} bg-pink-60`} />
      <div className={`${colorSize} bg-pink-65`} />
      <div className={`${colorSize} bg-pink-70`} />
      <div className={`${colorSize} bg-pink-75`} />
      <div className={`${colorSize} bg-pink-80`} />
      <div className={`${colorSize} bg-pink-85`} />
      <div className={`${colorSize} bg-pink-90`} />
      <div className={`${colorSize} bg-pink-95`} />
      <div className={`${colorSize} bg-pink-100`} />
    </div>
  </div>
);
