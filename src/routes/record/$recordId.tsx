import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/record/$recordId')({
  component: () => <div>Hello /record/$recordId!</div>
})