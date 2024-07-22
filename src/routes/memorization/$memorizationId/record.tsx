import { createFileRoute } from '@tanstack/react-router';

import { RecordList } from '../../../widgets/RecordList/RecordList';

export const Route = createFileRoute('/memorization/$memorizationId/record')({
  component: Record,
});

function Record() {
  return (
    <div className={'h-full w-full bg-[#F7F8F9] p-5'}>
      <RecordList />
    </div>
  );
}
