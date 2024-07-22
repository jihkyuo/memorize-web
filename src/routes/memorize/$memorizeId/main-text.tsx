import { createFileRoute } from '@tanstack/react-router';

import { Route as MemorizationDetailRoute } from '@/routes/memorize/$memorizeId';

export const Route = createFileRoute('/memorize/$memorizeId/main-text')({
  component: MainText,
});

function MainText() {
  const { mainText } = MemorizationDetailRoute.useLoaderData({
    select: select => ({ mainText: select.mainText }),
  });

  return <div className={'whitespace-pre-line p-6 text-lg font-normal'}>{mainText}</div>;
}
