import { RecordItem } from '@/entities/record/ui/RecordItem';

export function RecordList() {
  return (
    <div className={'space-y-4'}>
      <RecordItem title={'녹음1'} description={'2024-01-09 16:34'} recordId={'1'} />
      <RecordItem title={'녹음2'} description={'2024-01-09 16:34'} recordId={'2'} />
      <RecordItem title={'녹음3'} description={'2024-01-09 16:34'} recordId={'3'} />
    </div>
  );
}
