import React from 'react';

import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';

interface Props {
  isMemorized: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
export function ToggleIsMemorizedCheckbox({ isMemorized, onChange }: Props) {
  return <Checkbox checked={isMemorized} onChange={onChange} onClick={e => e.stopPropagation()} />;
}
