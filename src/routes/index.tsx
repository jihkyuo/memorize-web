import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomeComponent
});

function HomeComponent() {
  return (
    <h1>
      Welcome Home!
    </h1>
  );
}