import { within } from '@storybook/testing-library'

import { PlayGroundForLaser } from './PlayGroundForLaser'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'PlayGroundForLaser',
  component: PlayGroundForLaser,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof PlayGroundForLaser>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
  },
  args: { users: [], camera: null, setCamera: () => {} },
}
