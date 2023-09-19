import { within } from '@storybook/testing-library'

import { Laser } from './Laser'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Laser',
  component: Laser,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Laser>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
  },
}
