import { createFileRoute, Outlet, useRouter } from '@tanstack/react-router';
import { useState } from 'react';

import { Header } from '@/shared/ui/Header/Header';
import { Tabs, type TabItemProps } from '@/shared/ui/Tabs';

type SectionType = 'MAIN_TEXT' | 'RECORD_LIST';

export const Route = createFileRoute('/memorize/$memorizeId')({
  component: MemorizeDetail,
});

function MemorizeDetail() {
  const { history } = useRouter();
  const [ section, setSection ] = useState<SectionType>('MAIN_TEXT');

  const items: TabItemProps<SectionType>[] = [
    {
      value: 'MAIN_TEXT',
      label: '본문 보기',
    },
    {
      value: 'RECORD_LIST',
      label: '녹음 목록',
    },
  ];

  return (
    <>
      <Header title={'제목'} navOption={{ type: 'back', onClick: () => history.back() }} />
      <Tabs value={section} items={items} onChange={e => setSection(e.target.value as SectionType)} />
      <Outlet />
    </>
  );
}
