import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

import { useRadioThemeContext } from '@/shared/ui/Radio';

const Variants = cva(`cursor-pointer rounded-2xl px-3 py-1.5 text-[15px]`, {
  variants: {
    checked: {
      true: 'bg-primary font-semibold text-white',
      false: 'opacity-30',
    },
  },
  defaultVariants: {
    checked: false,
  },
});

export function MemorizeStatusSwitch({ children }: PropsWithChildren) {
  const theme = useRadioThemeContext();

  return <div className={clsx(Variants({ checked: theme.checked }))}>{children}</div>;
}
