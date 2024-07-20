import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

import { getMemorizationList } from '@/entities/memorizeList/api';
import { AddMemorizeItem } from '@/features/memorizeList/addItem/AddMemorizeItem';
import { MemorizeList } from '@/widgets/memorizeList/list/ui/MemorizeList';
import { MemorizeStatusSwitch } from '../features/memorizeList/memorizeStatusSwitch/MemorizeStatusSwitch';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  const { data, refetch } = useSuspenseQuery({
    queryKey: [ 'memorizationList' ],
    queryFn: getMemorizationList,
  });

  const [ isMemorizedStatus, setIsMemorizedStatus ] = useState(false);
  const filteredMemorizationList = data?.filter(ele => isMemorizedStatus === ele.isMemorized) ?? [];

  return (
    <>
      <div className={'flex items-center justify-between px-4 py-3'}>
        <h3 className={'text-2xl font-bold'}>암기 목록</h3>
        <AddMemorizeItem />
      </div>

      <MemorizeStatusSwitch isMemorizedStatus={isMemorizedStatus} setIsMemorizedStatus={setIsMemorizedStatus} />

      <MemorizeList memorizationList={filteredMemorizationList} refetch={refetch} />
      {/* // todo footer navigation */}
    </>
  );
}
