import { within } from '@storybook/testing-library'

import { Test } from './Test'

import type { Meta, StoryObj } from '@storybook/react'

export type TestProps = {}

const meta = {
  title: 'Test',
  component: Test,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Test>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
  },
}
