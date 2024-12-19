import type { HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export function TextBox({ label, children, ...props }: PropsWithChildren<Props>) {
  return (
    <div
      {...props}
      className={twMerge(
        'flex min-h-36 flex-col whitespace-pre-line break-keep rounded-[10px] border border-[#0000001A] p-4',
        props.className
      )}>
      <div className={'mb-2 text-base'}>{label}</div>
      <div className={'h-full whitespace-pre-line text-sm'}>{children}</div>
    </div>
  );
}
