import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';

import { getRecordList } from '@/entities/memorizationDetail/api/memorizationDetail.resolver';
import { recordQueryKeys } from '@/entities/memorizationDetail/queries';
import { Route as MemorizationDetailRoute } from '@/routes/memorization/$memorizationId';
import { RecordItem } from '@/widgets/RecordList/ui/RecordItem';

export function RecordList() {
  const { memorizationId } = MemorizationDetailRoute.useParams();
  const { data: recordList = [] } = useQuery({
    ...recordQueryKeys.list(memorizationId),
    queryFn: () => getRecordList(memorizationId),
  });

  return (
    <div className={'space-y-4'}>
      {recordList.map(record => (
        <RecordItem
          key={record.id}
          title={record.title}
          description={dayjs(record.createdAt).format('YYYY-MM-DD HH:mm')}
          recordId={record.id}/>
      ))}
    </div>
  );
}
