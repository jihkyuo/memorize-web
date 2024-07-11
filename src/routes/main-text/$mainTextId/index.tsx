import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/main-text/$mainTextId/')({
  component: () => <div>Hello /main-text/$mainTextId/!</div>
})