import { WaitCard } from './WaitCard'

import type { Meta, StoryObj } from '@storybook/react'

export type WaitCardProps = {}

const meta = {
  title: 'WaitCard',
  component: WaitCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof WaitCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
