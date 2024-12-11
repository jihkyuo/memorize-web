import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import css from './Loader.module.css';

interface Props {
  className?: string;
  isAnimate: boolean
}

export function Loader({ className, isAnimate }: Props) {
  const animateClass = clsx(css.loader, { [css.animate]: isAnimate });

  return (
    <div className={twMerge('flex h-14 items-center justify-center space-x-7', className)}>
      <span className={animateClass}></span>
      <span className={animateClass}></span>
      <span className={animateClass}></span>
      <span className={animateClass}></span>
    </div>
  );
}
