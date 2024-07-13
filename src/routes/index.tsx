import { createFileRoute } from '@tanstack/react-router';

import IconAdd from '@/assets/icons/icon-add.svg';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {

  return (
    <>
      <div className={'flex items-center justify-between bg-red-500 px-4 py-3'}>
        <h3 className={'text-2xl'}>암기 목록</h3>
        <IconAdd />
      </div>
    </>
  );
}
