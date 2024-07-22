import { MouseEvent } from 'react';

import IconTrash from '@/assets/icons/icon-trash.svg';
import { Route as RecordDetailRoute } from '@/routes/memorization/$memorizationId/record_.$recordId';
import { Card } from '@/shared/ui/Card/Card';
import { Typography } from '@/shared/ui/Typography/Typography';

interface Props {
  title: string;
  description: string;
  recordId: string;
}
export function RecordItem({ title, description, recordId }: Props) {
  const navigate = RecordDetailRoute.useNavigate();

  const handleCardClick = () => {
    navigate({
      from: '/memorization/$memorizationId/record',
      to: RecordDetailRoute.to,
      params: { recordId },
    });
  };

  const handleRemove = (event: MouseEvent) => {
    event.stopPropagation();
    console.log('trash');
  };

  return (
    <Card onClick={handleCardClick}>
      <div className={'flex w-full items-center justify-between'}>
        <Typography description={description}>{title}</Typography>
        <IconTrash onClick={handleRemove} />
      </div>
    </Card>
  );
}
