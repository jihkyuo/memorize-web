import { PropsWithChildren } from 'react';

import { useRadioGroupContext } from '@/shared/ui/Radio/RadioGroupContext';
import { RadioThemeContext, useRadioThemeContext } from '@/shared/ui/Radio/RadioThemeContext';

export interface RadioButtonProps extends PropsWithChildren {
  value: string;
  disabled?: boolean;
}

export function RadioButton({ value, disabled, children }: RadioButtonProps) {
  const group = useRadioGroupContext();
  const theme = {
    disabled: (disabled || group.disabled) ?? false,
    checked: group.value ? group.value === value : group.defaultChecked ? group.defaultChecked === value : false,
  };

  return (
    <RadioThemeContext.Provider value={theme}>
      <RadioInput value={value}>{children}</RadioInput>
    </RadioThemeContext.Provider>
  );
}

interface RadioInputProps extends PropsWithChildren {
  value: string;
}

function RadioInput({ value, children }: RadioInputProps) {
  const group = useRadioGroupContext();
  const { checked, disabled } = useRadioThemeContext();

  return (
    <label className={'flex'}>
      <input
        {...group.innerProps}
        className={'m-0 w-0 appearance-none'}
        type={'radio'}
        value={value}
        disabled={disabled}
        checked={checked}/>
      {children}
    </label>
  );
}
