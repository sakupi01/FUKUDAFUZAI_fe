import * as THREE from 'three'

import { CanvasProvider } from '@/utils/canvasProvider'

import { ThreeDBox } from './ThreeDBox'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'ThreeDBox',
  component: ThreeDBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof ThreeDBox>

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
