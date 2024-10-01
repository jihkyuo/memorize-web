import { createQueryKeys } from '@lukemorales/query-key-factory';

export const recordQueryKeys = createQueryKeys('record', {
  list: (memorizationId: number) => [ memorizationId ],
});
