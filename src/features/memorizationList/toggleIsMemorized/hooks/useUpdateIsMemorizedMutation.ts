import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateIsMemorized } from '@/entities/memorizationList/api/memorizationList.resolver';
import { memorizationQueryKeys } from '@/entities/memorizationList/queries';
import { MemorizationDto } from '@/entities/memorizationList/types/memorizationList.dto';

export function useUpdateIsMemorizedMutation() {
  const queryClient = useQueryClient();

  const mutationResult = useMutation({
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

  return mutationResult;
}
