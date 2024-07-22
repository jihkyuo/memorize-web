import { createFileRoute, Outlet } from '@tanstack/react-router';
import { z } from 'zod';

import { getMemorizationDetail } from '@/entities/memorizationDetail/api/memorizationDetail.resolver';
import { memorizationQueryKeys } from '@/entities/memorizationList/queries';
import { CategoryTabs } from '@/features/memorizationDetail/categoryTabs/CategoryTabs';
import { Header } from '@/shared/ui/Header/Header';

export const Route = createFileRoute('/memorization/$memorizationId')({
  params: {
    parse: params => ({
      memorizationId: z.number().int().parse(Number(params.memorizationId)),
    }),
    stringify: ({ memorizationId }) => ({ memorizationId: `${memorizationId}` }),
  },
  component: MemorizationDetail,
  loader: ctx => {
    const memorizationId = ctx.params.memorizationId;
    return ctx.context.queryClient.ensureQueryData({
      ...memorizationQueryKeys.detail(memorizationId),
      queryFn: () => getMemorizationDetail(memorizationId),
    });
  },
});

function MemorizationDetail() {
  const match = Route.useMatch();
  const navigate = Route.useNavigate();
  const memorizationDetail = Route.useLoaderData({
    select: select => ({ title: select.title }),
  });

  const isRecordDetail = !!match.params.recordId;

  return (
    <>
      {!isRecordDetail && (
        <>
          <Header title={memorizationDetail.title} navOption={{ type: 'back', onClick: () => navigate({ to: '/' }) }} />
          <CategoryTabs />
        </>
      )}
      <Outlet />
    </>
  );
}
