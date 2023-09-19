import { within } from '@storybook/testing-library'

import { Button } from './Button'

import type { Meta, StoryObj } from '@storybook/react'

export type ButtonProps = {}

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
  },
}
