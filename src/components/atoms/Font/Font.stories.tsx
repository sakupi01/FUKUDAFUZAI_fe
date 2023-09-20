import { CanvasProvider } from '@/utils/canvasProvider'

import { Font } from './Font'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Font',
  component: Font,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Font>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Hello World',
  },
  decorators: [
    (Story) => (
      <CanvasProvider>
        <Story />
      </CanvasProvider>
    ),
  ],
}
