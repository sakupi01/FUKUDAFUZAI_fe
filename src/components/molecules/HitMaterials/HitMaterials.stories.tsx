import * as THREE from 'three'

import { CanvasProvider } from '@/utils/canvasProvider'

import { HitMaterials } from './HitMaterials'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'HitMaterials',
  component: HitMaterials,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof HitMaterials>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
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
    setBalls: () => {},
  },
  decorators: [
    (Story) => (
      <CanvasProvider camera={new THREE.PerspectiveCamera()}>
        <Story />
      </CanvasProvider>
    ),
  ],
}
