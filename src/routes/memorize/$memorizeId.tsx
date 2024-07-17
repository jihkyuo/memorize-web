import { createFileRoute, Outlet, redirect, useLocation, useRouter } from '@tanstack/react-router';
import { useState } from 'react';

import { Header } from '@/shared/ui/Header/Header';
import { Tabs, type TabItemProps } from '@/shared/ui/Tabs';

type SectionType = 'main-text' | 'record';

export const Route = createFileRoute('/memorize/$memorizeId')({
  component: MemorizeDetail,
  beforeLoad: (ctx) => {
    const isCorrect = ctx.location.pathname.includes('main-text') || ctx.location.pathname.includes('record');
    if(!isCorrect) {
      throw redirect({
        to: `/${Route.to}/${'main-text'}`
      });
    }
  }
});

function MemorizeDetail() {
  const { history } = useRouter();
  const navigate = Route.useNavigate();
  const location = useLocation();
  const lastSegment = location.pathname.split('/').pop() as SectionType;

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
    navigate({ to: `/${Route.to}/${section}` });
  };

  return (
    <>
      <Header title={'제목'} navOption={{ type: 'back', onClick: () => history.back() }} />
      <Tabs value={section} items={items} onChange={e => handleChangeSection(e.target.value as SectionType)} />
      <Outlet />
    </>
  );
}
