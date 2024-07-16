import { MemorizeItem } from '@/entities/memorizeList/ui/MemorizeItem';

interface Props {}

export function MemorizeList({}: Props) {
  // todo 서버 data fetch 후 action들 컴포넌트 외부에서 여기로 빼기(컴포넌트 추상화)
  return (
    <div className={'space-y-4 p-5'}>
      <MemorizeItem
        memorizeId={'1'}
        title={'날씨 예보'}
        description={`절기 소한과 함께 찾아왔던 한파는 누그러졌지만, 내일과 모레, 전국 대부분 지역에 많은 눈이 내리겠습니다.내일
          새벽에 중부 서해안과 경기 북부, 강원 북부를 시작으로 내일 오전에는 서울을 포함한 그 밖의 수도권과 강원 내륙,
          산간에 눈 또는 비가 내리겠습니다.`}/>
      <MemorizeItem memorizeId={'2'} title={'샘플'} description={'샘플 내용'} />
    </div>
  );
}
