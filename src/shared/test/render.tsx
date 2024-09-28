import { render as renderReact, type RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactNode } from 'react';

interface TestRenderResult {
  user: ReturnType<typeof userEvent.setup>;
  render: RenderResult;
  screen: typeof screen;
}

export const testRender = (component: ReactNode): TestRenderResult => {
  return {
    user: userEvent.setup(),
    render: renderReact(component),
    screen: screen
  };
};
