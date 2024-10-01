import { createFileRoute, useRouter } from '@tanstack/react-router';
import { z } from 'zod';

import { Route as MemorizationDetailRoute } from '@/routes/memorization/$memorizationId';
import { Header } from '@/shared/ui/Header/Header';
import { TextBox } from '@/shared/ui/TextBox/TextBox';

export const Route = createFileRoute('/memorization/$memorizationId/record/$recordId')({
  params:{
    parse: params => ({
      recordId: z.number().int().parse(Number(params.recordId))
    }),
    stringify: ({ recordId }) => ({ recordId: `${recordId}` }),
  },
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
