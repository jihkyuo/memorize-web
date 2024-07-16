import clsx from 'clsx';
import { InputHTMLAttributes, type ReactNode } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
}

export function Tab({ label, ...inputProps }: Props) {
  return (
    <label
      className={clsx(
        `z-[1] flex flex-1 cursor-pointer justify-center text-[15px] font-medium text-[#0000004D] transition-colors duration-100`,
        {
          'font-semibold text-primary': inputProps.checked,
        }
      )}>
      <input type={'radio'} className={'m-0 w-0 appearance-none'} {...inputProps} />
      {label}
    </label>
  );
}
