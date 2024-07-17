import { InputHTMLAttributes, ReactNode } from 'react';

import { Tab } from '@/shared/ui/Tabs/Tab';
import { TabSlide } from '@/shared/ui/Tabs/TabSlide';

export interface TabItemProps<TValue = string> {
  value: TValue;
  label: ReactNode;
  disabled?: boolean;
}

interface TabsProps<TValue extends string> extends InputHTMLAttributes<HTMLInputElement> {
  value?: TValue;
  items: TabItemProps<TValue>[];
  disabled?: boolean;
  isDivideLine?: boolean;
}

export function Tabs<TValue extends string>({
  value,
  items,
  disabled,
  isDivideLine,
  ...inputProps
}: TabsProps<TValue>) {
  const checkedIndex = items.findIndex(item => item.value === value);
  const widthRatio = (1 / items.length) * 100;
  const translateRatio = checkedIndex * 100;

  return (
    <div className={`relative flex py-4 ${isDivideLine ? 'border-b-2' : ''}`}>
      <TabSlide widthRatio={widthRatio} translateRatio={translateRatio} />
      {items.map(item => (
        <Tab
          key={item.value}
          value={item.value}
          label={item.label}
          checked={item.value === value}
          disabled={disabled || item.disabled}
          {...inputProps}/>
      ))}
    </div>
  );
}
