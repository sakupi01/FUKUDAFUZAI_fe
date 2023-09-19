import { within } from '@storybook/testing-library'

import { ObjectsForLaser } from './ObjectsForLaser'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'ObjectsForLaser',
  component: ObjectsForLaser,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof ObjectsForLaser>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
  },
}
