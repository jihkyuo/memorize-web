import { createFileRoute } from '@tanstack/react-router';

const mockData = `절기 소한과 함께 찾아왔던 한파는 누그러졌지만, 내일과 모레, 전국 대부분 지역에 많은 눈이 내리겠습니다.내일 새벽에 중부 서해안과 경기 북부, 강원 북부를 시작으로 내일 오전에는 서울을 포함한 그 밖의 수도권과 강원 내륙, 산간에 눈 또는 비가 내리겠습니다.

늦은 오후부터는 전국 대부분 지역에 눈이 내릴 텐데요.강원 산간에 최대 20cm 이상, 경북 산지 최대 15cm 이상, 서울과 경기 일부 지역에 3에서 많게는 15cm 이상의 눈이 내리겠습니다.

남부지방은 기온이 높아 비로 내리는 곳도 많겠습니다.큰 교통 혼잡이 우려되는 만큼, 내일 출퇴근 시에는 가급적 대중 교통을 이용하셔야겠습니다.내일 아침 서울 영하 2도, 대전 영하 3도 등으로 오늘보다 크게는 10도 정도 높겠습니다.남부지방은 진주 영하 7도로 출발해 한낮에 영상 7도까지 오르는 등, 일교차가 매우 크겠습니다.물결은 동해 먼바다에서 최고 3.5m로 높게 일겠습니다.이번 주말에 다시 수도권과 영서에 눈, 비 소식이 있습니다.날씨였습니다.`;

export const Route = createFileRoute('/memorize/$memorizeId/main-text')({
  component: MainText,
});

function MainText() {
  const { memorizeId } = Route.useParams();
  // todo memorizeId로 해당 상세 페이지의 data를 가져와 tanstack router context를 이용해보기

  return (
    <div className={'font-normal text-lg p-6 whitespace-pre-line'}>
      {mockData}
    </div>
  );
}
