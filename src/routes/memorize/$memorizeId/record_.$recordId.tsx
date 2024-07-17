import { createFileRoute, useRouter } from '@tanstack/react-router';

import { Header } from '@/shared/ui/Header/Header';

export const Route = createFileRoute('/memorize/$memorizeId/record/$recordId')({
  component: RecordDetail,
});

function RecordDetail() {
  const { recordId } = Route.useParams();
  const router = useRouter();
  
  return (
    <>
      <Header title={'제목'} navOption={{ type: 'back', onClick: router.history.back }} />
      Hello /memorize/$memorizeId/record/$recordId!
      <div>{recordId}</div>
    </>
  );
}
