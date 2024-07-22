import { createFileRoute, Outlet, redirect, useLocation } from '@tanstack/react-router';
import { useState } from 'react';
import { z } from 'zod';

import { getMemorizationDetail } from '@/entities/memorizationDetail/api/memorizationDetail.resolver';
import { memorizationQueryKeys } from '@/entities/memorizationList/queries';
import { Header } from '@/shared/ui/Header/Header';
import { Tabs, type TabItemProps } from '@/shared/ui/Tabs';

type SectionType = 'main-text' | 'record';

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
  beforeLoad: ctx => {
    const isCorrect = ctx.location.pathname.includes('main-text') || ctx.location.pathname.includes('record');
    if (!isCorrect) {
      throw redirect({
        to: `/${Route.to}/${'main-text'}`,
      });
    }
  },
});

function MemorizationDetail() {
  const navigate = Route.useNavigate();
  const location = useLocation();
  const match = Route.useMatch();
  const lastSegment = location.pathname.split('/').pop() as SectionType;
  const memorizationDetail = Route.useLoaderData({
    select: select => ({ title: select.title }),
  });

  const [ section, setSection ] = useState<SectionType>(lastSegment);

  const items: TabItemProps<SectionType>[] = [
    {
      value: 'main-text',
      label: '본문 보기',
    },
    {
      value: 'record',
      label: '녹음 목록',
    },
  ];

  const handleChangeSection = (section: SectionType) => {
    setSection(section);
    // issue Route.to 사용법이 문서 가이드에 권유되나, 여기에서처럼 자기 자신의 url에서 Route.to는 HMR 작동 시, undefiend로 변경되는 이슈가 있음(위험)
    // reference : https://github.com/TanStack/router/issues/1640
    // navigate({ to: `/${Route.to}/${section}` });
    navigate({ to: `/memorization/$memorizationId/${section}`, replace: true });
  };

  const isRecordDetail = !!match.params.recordId;

  return (
    <>
      {!isRecordDetail && (
        <>
          <Header title={memorizationDetail.title} navOption={{ type: 'back', onClick: () => navigate({ to: '/' }) }} />
          <Tabs
            value={section}
            items={items}
            onChange={e => handleChangeSection(e.target.value as SectionType)}
            isDivideLine/>
        </>
      )}
      <Outlet />
    </>
  );
}