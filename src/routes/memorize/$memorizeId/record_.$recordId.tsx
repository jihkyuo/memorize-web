import { createFileRoute, useRouter } from '@tanstack/react-router';

import { Header } from '@/shared/ui/Header/Header';
import { TextBox } from '@/shared/ui/TextBox/TextBox';

export const Route = createFileRoute('/memorize/$memorizeId/record/$recordId')({
  component: RecordDetail,
});

function RecordDetail() {
  const { recordId } = Route.useParams();
  const router = useRouter();

  return (
    <>
      <Header className={'pb-6'} title={'녹음1'} navOption={{ type: 'back', onClick: router.history.back }} />
      <div className={'w-full border'} />

      <div className={'space-y-4 p-4'}>
        <div>{recordId}</div>

        <TextBox label={'내용'}>text</TextBox>
        <TextBox label={'녹음한 내용'}>text</TextBox>
        <TextBox label={'정답 확인'}>text</TextBox>
      </div>
    </>
  );
}
