import type React from 'react';
import type { ReactNode } from 'react';

import { Card } from '@/shared/ui/Card/Card';
import { Typography } from '@/shared/ui/Typography/Typography';

interface Props {
  title: string;
  description: string;
  isChecked: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  prefix: ReactNode;
}

export function MemorizationItem({ title, description, onClick, prefix }: Props) {
  return (
    <Card onClick={onClick}>
      {prefix}
      <Typography description={description}>{title}</Typography>
    </Card>
  );
}
