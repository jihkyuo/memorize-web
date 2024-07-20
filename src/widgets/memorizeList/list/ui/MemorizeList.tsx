import { useNavigate } from '@tanstack/react-router';

import { useUpdateIsMemorizedMutation } from '@/entities/memorizeList/hooks/useUpdateIsMemorizedMutation';
import type { MemorizationDto } from '@/entities/memorizeList/types/memorizeList.dto';
import { MemorizeItem } from '@/entities/memorizeList/ui/MemorizeItem';
import { Route as MainTextRoute } from '@/routes/memorize/$memorizeId/main-text';

interface Props {
  memorizationList: MemorizationDto[];
  refetch: () => void;
}

export function MemorizeList({ memorizationList }: Props) {
  const navigate = useNavigate();
  const navigateToMainText = (memorizeId: number) => {
    navigate({ to: MainTextRoute.to, params: { memorizeId } });
  };
  const { mutate } = useUpdateIsMemorizedMutation();

  return (
    <div className={'space-y-4 p-5'}>
      {memorizationList.map(ele => (
        <MemorizeItem
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
