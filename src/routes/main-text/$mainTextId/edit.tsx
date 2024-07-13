import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/main-text/$mainTextId/edit')({
  component: () => <div>Hello /main-text/$mainTextId/edit!</div>
});