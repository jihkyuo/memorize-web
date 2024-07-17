import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import type { PropsWithChildren } from 'react';

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
      <TanStackRouterDevtools position={'bottom-right'} />
      <ReactQueryDevtools buttonPosition={'bottom-right'} />
    </>
  );
}

function Layout({ children }: PropsWithChildren) {
  return <div className={'h-screen overflow-hidden'}>{children}</div>;
}
