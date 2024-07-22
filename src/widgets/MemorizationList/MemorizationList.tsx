import { useNavigate } from '@tanstack/react-router';

import { useUpdateIsMemorizedMutation } from '@/entities/memorizationList/hooks/useUpdateIsMemorizedMutation';
import type { MemorizationDto } from '@/entities/memorizationList/types/memorizationList.dto';
import { MemorizationItem } from '@/entities/memorizationList/ui/MemorizationItem';
import { Route as MainTextRoute } from '@/routes/memorization/$memorizationId/main-text';

interface Props {
  memorizationList: MemorizationDto[];
  refetch: () => void;
}

export function MemorizationList({ memorizationList }: Props) {
  const navigate = useNavigate();
  const navigateToMainText = (memorizationId: number) => {
    navigate({ to: MainTextRoute.to, params: { memorizationId } });
  };
  const { mutate } = useUpdateIsMemorizedMutation();

  return (
    <div className={'space-y-4 p-5'}>
      {memorizationList.map(ele => (
        <MemorizationItem
          key={ele.id}
          title={ele.title}
          description={ele.mainText}
          isChecked={ele.isMemorized}
          onClick={() => navigateToMainText(ele.id)}
          onChangeCheck={event => {
            mutate({ id: ele.id, isMemorized: event.target.checked });
          }}/>
      ))}
    </div>
  );
}
