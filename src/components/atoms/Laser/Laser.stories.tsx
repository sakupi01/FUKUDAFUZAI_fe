import * as THREE from 'three'

import { CanvasProvider } from '@/utils/canvasProvider'

import { Laser } from './Laser'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Laser',
  component: Laser,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Laser>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    (Story) => (
      <CanvasProvider camera={new THREE.PerspectiveCamera()}>
        <Story />
      </CanvasProvider>
    ),
  ],
}
