import type { PropsWithChildren } from 'react';
import React from 'react';

interface Props extends PropsWithChildren {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function Card({ onClick, children }: Props) {
  return (
    <div
      onClick={onClick}
      className={
        'flex cursor-pointer items-center space-x-4 rounded-2xl border-[0.5px] border-[#0000001A] bg-white px-6 py-4 shadow-custom'
      }>
      {children}
    </div>
  );
}
