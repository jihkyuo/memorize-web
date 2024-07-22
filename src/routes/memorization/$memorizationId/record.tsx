import { createFileRoute } from '@tanstack/react-router';

import { RecordItem } from '@/entities/record/ui/RecordItem';

export const Route = createFileRoute('/memorization/$memorizationId/record')({
  component: Record,
});

function Record() {
  return (
    <div className={'h-full w-full bg-[#F7F8F9] p-5'}>
      <div className={'space-y-4'}>
        <RecordItem title={'녹음1'} description={'2024-01-09 16:34'} recordId={'1'} />
        <RecordItem title={'녹음2'} description={'2024-01-09 16:34'} recordId={'2'} />
        <RecordItem title={'녹음3'} description={'2024-01-09 16:34'} recordId={'3'} />
      </div>
    </div>
  );
}
