import { createFileRoute } from '@tanstack/react-router';

import { Foo } from '@/features/Foo';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {

  return (
    <h1>
      <Foo />
      <div>Welcome Home!</div>
    </h1>
  );
}
