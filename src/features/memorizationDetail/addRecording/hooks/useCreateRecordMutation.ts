import { useMutation } from '@tanstack/react-query';

import { createRecord } from '@/entities/memorizationDetail/api/memorizationDetail.resolver';

export const useCreateRecordMutation = () => {
  const mutationResult = useMutation({
    mutationFn: createRecord,
  });

  return mutationResult;
};
