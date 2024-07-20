import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { updateIsMemorized } from '@/entities/memorizeList/api/memorizeList.resolver';
import { memorizationQueryKeys } from '@/entities/memorizeList/queries';
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

  const queryClient = useQueryClient();

  const { mutate: updateIsMemorizedMutate } = useMutation({
    mutationFn: updateIsMemorized,
    onMutate: async body => {
      await queryClient.cancelQueries(memorizationQueryKeys.list);
      const prevList = queryClient.getQueryData<MemorizationDto[]>(memorizationQueryKeys.list.queryKey);
      queryClient.setQueryData<MemorizationDto[]>(memorizationQueryKeys.list.queryKey, (old = []) =>
        old.map(ele => ({ ...ele, isMemorized: ele.id === body.id ? body.isMemorized : ele.isMemorized }))
      );

      return { prevList };
    },
    onError: (error, __, context) => {
      console.error(error);
      queryClient.setQueryData<MemorizationDto[]>(memorizationQueryKeys.list.queryKey, context?.prevList ?? []);
    },
    onSettled: () => {
      queryClient.invalidateQueries(memorizationQueryKeys.list);
    },
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
