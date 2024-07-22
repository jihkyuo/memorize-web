import { createQueryKeys } from '@lukemorales/query-key-factory';

export const memorizationQueryKeys = createQueryKeys('memorization', {
  list: null,
  detail: (memorizationId) => [ memorizationId ]
  // detail: (userId: string) => ({
  //   queryKey: [ userId ],
  //   queryFn: () => api.getUser(userId),
  // }),
});
