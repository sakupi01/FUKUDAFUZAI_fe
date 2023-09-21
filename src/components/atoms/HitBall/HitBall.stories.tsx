import { CanvasProvider } from '@/utils/canvasProvider'

import { HitBall } from './HitBall'

import type { Meta, StoryObj } from '@storybook/react'

export type HitBallProps = {}

const meta = {
  title: 'HitBall',
  component: HitBall,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof HitBall>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ball: {
      x: 0,
      y: 0,
      z: 0,
      id: 0,
      time: 4,
      color: '#a492f9',
      point: 1,
      isDeleted: false,
    },
    balls: [
      {
        x: 0,
        y: 0,
        z: 0,
        id: 1,
        time: 4,
        color: '#a492f9',
        point: 1,
        isDeleted: false,
      },
    ],
  },
  decorators: [
    (Story) => (
      <CanvasProvider>
        <Story />
      </CanvasProvider>
    ),
  ],
}
