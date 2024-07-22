import { twMerge } from 'tailwind-merge';

import css from './Loader.module.css';

interface Props {
  className?: string;
}

export function Loader({ className }: Props) {
  return (
    <div className={twMerge('flex h-14 items-center justify-center space-x-7', className)}>
      <span className={css.loader}></span>
      <span className={css.loader}></span>
      <span className={css.loader}></span>
      <span className={css.loader}></span>
    </div>
  );
}
