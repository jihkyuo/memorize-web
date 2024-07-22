import type React from 'react';

import { Card } from '@/shared/ui/Card/Card';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';
import { Typography } from '@/shared/ui/Typography/Typography';

interface Props {
  title: string;
  description: string;
  isChecked: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onChangeCheck?: React.ChangeEventHandler<HTMLInputElement>;
}

export function MemorizeItem({ title, description, isChecked, onClick, onChangeCheck }: Props) {
  return (
    <Card onClick={onClick}>
      <Checkbox checked={isChecked} onChange={onChangeCheck} onClick={e => e.stopPropagation()}/>
      <Typography description={description}>{title}</Typography>
    </Card>
  );
}
