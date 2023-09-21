import { WaitingComponent } from './WaitingComponent'

import type { Meta, StoryObj } from '@storybook/react'
export type WaitingComponentProps = {}

const meta = {
  title: 'WaitingComponent',
  component: WaitingComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof WaitingComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    users: [],
    id: null,
    setIsWaitingRoom: () => {},
    setUsers: () => {},
  },
}
