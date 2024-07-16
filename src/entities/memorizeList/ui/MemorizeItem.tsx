import { useNavigate } from '@tanstack/react-router';

import { Route as MainTextRoute } from '@/routes/memorize/$memorizeId/main-text';

interface Props {
  memorizeId: string;
  title: string;
  description: string;
}

export function MemorizeItem({ memorizeId, title, description }: Props) {
  const navigate = useNavigate();
  const navigateToMainText = () => {
    navigate({ to: MainTextRoute.to, params: { memorizeId } });
  };

  const handleCheck = () => {
    // todo atom과 연결
  };

  return (
    <div
      onClick={navigateToMainText}
      className={
        'shadow-custom flex cursor-pointer items-center space-x-4 rounded-2xl border-[0.5px] border-[#0000001A] px-6 py-4'
      }>
      <div onClick={handleCheck} className={'size-[30px] flex-shrink-0 rounded-full border-2'} />
      <div>
        <div className={'text-[16px] font-semibold'}>{title}</div>
        <div className={'line-clamp-1 text-[13px]/5 font-normal text-[#00000080]'}>{description}</div>
      </div>
    </div>
  );
}
