import { createFileRoute } from '@tanstack/react-router';

import { Route as MemorizationDetailRoute } from '@/routes/memorization/$memorizationId';

export const Route = createFileRoute('/memorization/$memorizationId/main-text')({
  component: MainText,
});

function MainText() {
  const { mainText } = MemorizationDetailRoute.useLoaderData({
    select: select => ({ mainText: select.mainText }),
  });

  return <div className={'whitespace-pre-line break-keep p-6 text-lg font-normal'}>{mainText}</div>;
}
