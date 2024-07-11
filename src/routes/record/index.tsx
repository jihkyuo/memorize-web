import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/record/')({
  component: () => <div>Hello /record/!</div>
})