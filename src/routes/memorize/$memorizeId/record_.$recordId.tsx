import { createFileRoute, useRouter } from '@tanstack/react-router';

import { Route as MemorizationDetailRoute } from '@/routes/memorize/$memorizeId';
import { Header } from '@/shared/ui/Header/Header';
import { TextBox } from '@/shared/ui/TextBox/TextBox';

export const Route = createFileRoute('/memorize/$memorizeId/record/$recordId')({
  component: RecordDetail,
});

function RecordDetail() {
  const router = useRouter();

  const { mainText } = MemorizationDetailRoute.useLoaderData({
    select: select => ({ mainText: select.mainText }),
  });

  return (
    <>
      <Header className={'pb-6'} title={'녹음1'} navOption={{ type: 'back', onClick: router.history.back }} />
      <div className={'w-full border'} />

      <div className={'space-y-4 p-4'}>
        <TextBox label={'내용'}>{mainText}</TextBox>
        <TextBox label={'녹음한 내용'}>text</TextBox>
        <TextBox label={'정답 확인'}>text</TextBox>
      </div>
    </>
  );
}
