import { createFileRoute } from '@tanstack/react-router';

import { AddRecording } from '@/features/memorizationDetail/addRecording';
import { RecordList } from '@/widgets/RecordList/ui/RecordList';

export const Route = createFileRoute('/memorization/$memorizationId/record')({
  component: Record,
});

function Record() {
  return (
    <div className={'h-full w-full bg-[#F7F8F9] p-5'}>
      <RecordList />
      <AddRecording />
    </div>
  );
}
