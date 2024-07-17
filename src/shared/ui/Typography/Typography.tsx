import type { PropsWithChildren, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends PropsWithChildren {
  description?: ReactNode;
  className?: string;
  titleCn?: string;
  descriptionCn?: string;
}

export function Typography({ description, className, titleCn, descriptionCn, children }: Props) {
  return (
    <div className={className}>
      <div className={twMerge('text-[16px] font-semibold', titleCn)}>{children}</div>
      <div className={twMerge('line-clamp-1 text-[13px]/5 font-normal text-[#00000080]', descriptionCn)}>
        {description}
      </div>
    </div>
  );
}
