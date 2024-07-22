import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

import { getMemorizationList } from '@/entities/memorizationList/api/memorizationList.resolver';
import { memorizationQueryKeys } from '@/entities/memorizationList/queries';
import { AddMemorizeItem } from '@/features/memorizationList/addItem/AddMemorizeItem';
import { MemorizeStatusSwitch } from '@/features/memorizationList/memorizeStatusSwitch/MemorizeStatusSwitch';
import { MemorizeList } from '@/widgets/MemorizationList/MemorizeList';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  const { data: memorizationList, refetch } = useSuspenseQuery({
    ...memorizationQueryKeys.list,
    queryFn: getMemorizationList,
  });

  const [ isMemorizedStatus, setIsMemorizedStatus ] = useState(false);
  const filteredMemorizationList = memorizationList.filter(ele => isMemorizedStatus === ele.isMemorized);

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
