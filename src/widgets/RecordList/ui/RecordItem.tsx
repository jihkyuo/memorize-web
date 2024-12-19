import { useMutation } from '@tanstack/react-query';
import { MouseEvent } from 'react';

import IconTrash from '@/assets/icons/icon-trash.svg';
import { deleteRecord } from '@/entities/memorizationDetail/api/memorizationDetail.resolver';
import { recordQueryKeys } from '@/entities/memorizationDetail/queries';
import { queryClient } from '@/main';
import { Route as MemorizationDetailRoute } from '@/routes/memorization/$memorizationId';
import { Route as RecordDetailRoute } from '@/routes/memorization/$memorizationId/record_.$recordId';
import { Card } from '@/shared/ui/Card/Card';
import { Typography } from '@/shared/ui/Typography/Typography';

interface Props {
  title: string;
  description: string;
  recordId: number;
}
export function RecordItem({ title, description, recordId }: Props) {
  const navigate = RecordDetailRoute.useNavigate();
  const { memorizationId } = MemorizationDetailRoute.useParams();
  const { mutate: deleteRecordMutation } = useMutation({
    mutationFn: deleteRecord,
  });

  const handleCardClick = () => {
    navigate({
      from: '/memorization/$memorizationId/record',
      to: RecordDetailRoute.to,
      params: { recordId },
    });
  };

  const handleRemove = (event: MouseEvent) => {
    event.stopPropagation();
    deleteRecordMutation(recordId, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: recordQueryKeys.list(memorizationId).queryKey,
        });
        alert('삭제 완료');
      },
    });
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
