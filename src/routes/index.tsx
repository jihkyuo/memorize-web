import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

import IconAdd from '@/assets/icons/icon-add.svg';
import { getMemorizationList } from '@/entities/memorizationList/api/memorizationList.resolver';
import { memorizationQueryKeys } from '@/entities/memorizationList/queries';
import { MemorizationStatusSwitch } from '@/features/memorizationList/memorizationStatusSwitch';
import { MemorizationList } from '@/widgets/MemorizationList';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  const navigate = Route.useNavigate();
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
        <IconAdd className={'cursor-pointer'} onClick={() => navigate({ to: '/add' })} />
      </div>

      <MemorizationStatusSwitch isMemorizedStatus={isMemorizedStatus} setIsMemorizedStatus={setIsMemorizedStatus} />

      <MemorizationList memorizationList={filteredMemorizationList} refetch={refetch} />
      {/* // todo footer navigation */}
    </>
  );
}
