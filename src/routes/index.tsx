import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

import { AddMemorizeItem } from '@/features/memorizeList/addItem/AddMemorizeItem';
import { MemorizeStatusSwitch } from '@/features/memorizeList/memorizeStatusSwitch/MemorizeStatusSwitch';
import { RadioButton, RadioGroup } from '@/shared/ui/Radio';
import { MemorizeList } from '@/widgets/memorizeList/list/ui/MemorizeList';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

const MemorizeStatusRecord = {
  ONGOING: '암기 중',
  COMPLETE: '암기 완료',
} as const;

type MemorizeStatusType = keyof typeof MemorizeStatusRecord;

function HomeComponent() {
  const [ memorizeStatus, setMemorizeStatus ] = useState<MemorizeStatusType>('ONGOING');
  return (
    <>
      <div className={'flex items-center justify-between px-4 py-3'}>
        <h3 className={'text-2xl font-bold'}>암기 목록</h3>
        <AddMemorizeItem />
      </div>

      <div className={'px-4 py-1'}>
        <RadioGroup
          value={memorizeStatus}
          innerProps={{ onChange: value => setMemorizeStatus(value.target.value as MemorizeStatusType) }}>
          <div className={'flex gap-1'}>
            {Object.keys(MemorizeStatusRecord).map(status => (
              <RadioButton key={status} value={status}>
                <MemorizeStatusSwitch>{MemorizeStatusRecord[status as MemorizeStatusType]}</MemorizeStatusSwitch>
              </RadioButton>
            ))}
          </div>
        </RadioGroup>
      </div>

      <MemorizeList />
      {/* // todo footer navigation */}
    </>
  );
}
