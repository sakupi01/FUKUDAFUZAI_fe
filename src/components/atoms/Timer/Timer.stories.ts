import { within } from '@storybook/testing-library'

import { Timer } from './Timer'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: "Timer",
  component: Timer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} satisfies Meta<typeof Timer>;


export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};