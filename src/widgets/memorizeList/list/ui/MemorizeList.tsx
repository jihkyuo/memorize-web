import type { MemorizationDto } from '@/entities/memorizeList/types/memorizeList.dto';
import { MemorizeItem } from '@/entities/memorizeList/ui/MemorizeItem';

interface Props {
  memorizationList: MemorizationDto[];
}

export function MemorizeList({ memorizationList }: Props) {
  // todo 서버 data fetch 후 action들 컴포넌트 외부에서 여기로 빼기(컴포넌트 추상화)
  return (
    <div className={'space-y-4 p-5'}>
      {memorizationList.map(ele => (
        <MemorizeItem key={ele.id} memorizeId={ele.id} title={ele.title} description={ele.mainText} />
      ))}
    </div>
  );
}
