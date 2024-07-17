import { MouseEvent } from 'react';

import IconTrash from '@/assets/icons/icon-trash.svg';
import { Card } from '@/shared/ui/Card/Card';
import { Typography } from '@/shared/ui/Typography/Typography';
import { Route as RecordDetailRoute } from '../../../routes/memorize/$memorizeId/record_.$recordId';

interface Props {
  title: string;
  description: string;
  recordId: string;
}
export function RecordItem({ title, description, recordId }: Props) {
  const navigate = RecordDetailRoute.useNavigate();

  const handleCardClick = () => {
    navigate({
      from: '/memorize/$memorizeId/record',
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
