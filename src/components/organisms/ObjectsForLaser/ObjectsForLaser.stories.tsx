import * as THREE from 'three'

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
    attackerParams: [
      {
        id: 1,
        color: '#fff',
        position: { x: 0, y: 0, z: 0 },
        scoreSender: () => {},
      },
    ],
    setTargets: () => {},
  },
  decorators: [
    (Story) => (
      <CanvasProvider camera={new THREE.PerspectiveCamera()}>
        <Story />
      </CanvasProvider>
    ),
  ],
}
