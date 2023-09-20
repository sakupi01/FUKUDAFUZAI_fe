import { CanvasProvider } from '@/utils/canvasProvider'

import { Attackers } from './Attackers'

import type { Meta, StoryObj } from '@storybook/react'
export type AttackersProps = {}

const meta = {
  title: 'Attackers',
  component: Attackers,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Attackers>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    users: [
      {
        id: 1,
        name: 'test1',
        positionGetter: (width: number, height: number) => {
          return {
            x: 0,
            y: 0,
          }
        },
        peerId: 'sdfnoifsdf',
        iconColor: 'red',
      },
      {
        id: 2,
        name: 'test2',
        positionGetter: (width: number, height: number) => {
          return {
            x: 3,
            y: 0,
          }
        },
        peerId: 'sadfadfoih',
        iconColor: 'green',
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
