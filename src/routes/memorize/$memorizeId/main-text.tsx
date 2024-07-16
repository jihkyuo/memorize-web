import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/memorize/$memorizeId/main-text')({
  component: MainText,
});

function MainText() {
  const { memorizeId } = Route.useParams();
  return (
    <>
      {memorizeId}
      {typeof memorizeId}
    </>
  );
}
