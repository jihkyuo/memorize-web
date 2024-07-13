import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/main-text/')({
  component: () => <div>Hello /main-text/!</div>
});