import type { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  onClick?: () => void;
}

export function Card({ onClick, children }: Props) {
  return (
    <div
      onClick={onClick}
      className={
        'shadow-custom flex cursor-pointer items-center space-x-4 rounded-2xl border-[0.5px] border-[#0000001A] px-6 py-4'
      }>
      {children}
    </div>
  );
}
