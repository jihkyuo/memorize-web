import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/memorize/$memorizeId/record')({
  component: () => <div>Hello /memorize/$memorizeId/record!</div>
});