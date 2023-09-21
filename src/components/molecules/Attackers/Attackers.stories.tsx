import * as THREE from 'three'

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
    attackerParams: [
      {
        id: 1,
        color: '#fff',
        charge: 0,
        position: { x: 0, y: 0, z: 0 },
        scoreSender: () => {},
      },
    ],
  },
  decorators: [
    (Story) => (
      <CanvasProvider camera={new THREE.PerspectiveCamera()}>
        <Story />
      </CanvasProvider>
    ),
  ],
}
