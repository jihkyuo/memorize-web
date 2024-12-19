import { createQueryKeys } from '@lukemorales/query-key-factory';

import { getRecordDetail } from '@/entities/recordDetail/api/recordDetail.resolver';

export const recordDetailQueryKeys = createQueryKeys('recordDetail', {
  detail: (recordId: number) => ({
    queryKey: [ recordId ],
    queryFn: () => getRecordDetail(recordId),
  }),
});
