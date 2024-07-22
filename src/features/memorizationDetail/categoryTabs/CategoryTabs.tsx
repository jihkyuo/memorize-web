import { useLocation } from '@tanstack/react-router';
import { useState } from 'react';

import { Route as MemorizationDetailRoute } from '@/routes/memorization/$memorizationId';
import { TabItemProps, Tabs } from '@/shared/ui/Tabs';

type SectionType = 'main-text' | 'record';

export function CategoryTabs() {
  const navigate = MemorizationDetailRoute.useNavigate();

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
    navigate({ to: `/memorization/$memorizationId/${section}`, replace: true });
  };

  return (
    <Tabs
      value={section}
      items={items}
      onChange={e => handleChangeSection(e.target.value as SectionType)}
      isDivideLine/>
  );
}
