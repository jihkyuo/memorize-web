import type { ReactNode } from '@tanstack/react-router';
import { twMerge } from 'tailwind-merge';

import IconArrowLeft from '@/assets/icons/icon-arrow-left.svg';

interface Props {
  title?: ReactNode;
  left?: ReactNode;
  extra?: ReactNode;
  navOption?: {
    type: 'back'; // close type 등 추가 가능
    onClick?: () => void;
  };
  className?: string;
}

const NavRecord = {
  back: (onClick?: () => void) => <IconArrowLeft onClick={onClick} />,
  // close type 등 추가 가능...
};

export function Header({ title, left, extra, navOption, className }: Props) {
  return (
    <div className={twMerge('px-6 py-4', className)}>
      <div className={'relative flex'}>
        <div className={'absolute left-0 top-0 flex h-full items-center space-x-3'}>
          <div className={'cursor-pointer'}>{navOption && NavRecord[navOption.type](navOption.onClick)}</div>
          <div>{left}</div>
        </div>

        <div className={'flex min-h-6 w-full items-center justify-center font-semibold'}>{title}</div>

        <div className={'absolute right-0 top-0 flex h-full items-center'}>{extra}</div>
      </div>
    </div>
  );
}
