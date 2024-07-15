import { PropsWithChildren } from 'react';

import { type GroupProps, RadioGroupContext } from '@/shared/ui/Radio/RadioGroupContext';

export function RadioGroup({ children, ...rest }: GroupProps & PropsWithChildren) {
  return (
    <fieldset>
      <RadioGroupContext.Provider value={rest}>{children}</RadioGroupContext.Provider>
    </fieldset>
  );
}
