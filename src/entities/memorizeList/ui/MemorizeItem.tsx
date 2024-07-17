import { useNavigate } from '@tanstack/react-router';

import { Route as MainTextRoute } from '@/routes/memorize/$memorizeId/main-text';
import { Card } from '@/shared/ui/Card/Card';
import { Typography } from '@/shared/ui/Typography/Typography';

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
    <Card onClick={navigateToMainText}>
      <div onClick={handleCheck} className={'size-[30px] flex-shrink-0 rounded-full border-2'} />
      <Typography description={description}>{title}</Typography>
    </Card>
  );
}
