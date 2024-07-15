import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

import IconAdd from '@/assets/icons/icon-add.svg';
import { MemorizeStatusSwitch } from '@/features/memorizeStatusSwitch/MemorizeStatusSwitch';
import { RadioButton, RadioGroup } from '@/shared/ui/Radio';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  const [ foo, setFoo ] = useState('te');
  return (
    <>
      <div className={'flex items-center justify-between px-4 py-3'}>
        <h3 className={'text-2xl font-bold'}>암기 목록</h3>
        <IconAdd />
      </div>

      <div className={'px-4 py-1'}>
        <RadioGroup value={foo} innerProps={{ onChange: value => setFoo(value.target.value) }}>
          <div className={'flex gap-1'}>
            <RadioButton value={'te'}>
              <MemorizeStatusSwitch>암기 중</MemorizeStatusSwitch>
            </RadioButton>
            <RadioButton value={'test2'}>
              <MemorizeStatusSwitch>암기 완료</MemorizeStatusSwitch>
            </RadioButton>
          </div>
        </RadioGroup>
      </div>

      {/* // todo 리스트 */}
      {/* // todo footer navigation */}
    </>
  );
}
