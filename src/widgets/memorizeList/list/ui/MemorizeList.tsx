import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import type { MemorizationDto } from '@/entities/memorizeList/types/memorizeList.dto';
import { MemorizeItem } from '@/entities/memorizeList/ui/MemorizeItem';
import { Route as MainTextRoute } from '@/routes/memorize/$memorizeId/main-text';
import { updateIsMemorized } from '../../../../entities/memorizeList/api/memorizeList.resolver';

interface Props {
  memorizationList: MemorizationDto[];
  refetch: () => void;
}

export function MemorizeList({ memorizationList, refetch }: Props) {
  const navigate = useNavigate();
  const navigateToMainText = (memorizeId: number) => {
    navigate({ to: MainTextRoute.to, params: { memorizeId } });
  };

  const { mutate: updateIsMemorizedMutate } = useMutation({
    mutationFn: updateIsMemorized,
    onSuccess: () => refetch(),
  });

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
            updateIsMemorizedMutate({ id: ele.id, isMemorized: event.target.checked });
          }}/>
      ))}
    </div>
  );
}
