import { within } from '@storybook/testing-library'

import { Home } from './Home'

import type { Meta, StoryObj } from '@storybook/react'
export type HomeProps = {}

const meta = {
  title: 'Home',
  component: Home,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
  },
}
