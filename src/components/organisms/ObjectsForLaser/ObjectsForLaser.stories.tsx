import { CanvasProvider } from '@/utils/canvasProvider'

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
  args: {
    users: [
      {
        id: 1,
        name: 'test',
        positionGetter: (width: number, height: number) => {
          return {
            x: 0,
            y: 0,
          }
        },
        peerId: 'sdfnoifsdf',
        iconColor: 'red',
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
