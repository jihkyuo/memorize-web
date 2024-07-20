import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

import { useRadioThemeContext } from '@/shared/ui/Radio';

const Variants = cva(`cursor-pointer rounded-full px-4 py-2 text-[15px] transition-all`, {
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

export function StatusSwitchButton({ children }: PropsWithChildren) {
  const theme = useRadioThemeContext();

  return <div className={clsx(Variants({ checked: theme.checked }))}>{children}</div>;
}
