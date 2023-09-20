import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Suspense } from 'react'

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

const distance = 800
const FOV = (2 * Math.atan(innerHeight / (2 * distance)) * 180) / Math.PI

export const Default: Story = {
  decorators: [
    (Story: React.FC) => (
      <Canvas
        shadows
        gl={{ localClippingEnabled: true }}
        camera={{
          position: [0, 2, 5],
          fov: FOV,
          aspect: innerWidth / innerHeight,
        }}
        style={{ width: '100vw', height: '100vh' }}
      >
        <ambientLight />
        {/* Control the movement of the camera with mouse interaction */}
        <OrbitControls attach='orbitControls' />
        <color attach='background' args={['#fff']} />
        {/* <fog attach="fog" args={["#fff", 5, 20]} /> */}
        {/* To make sure all the required engines are loaded before te calculation */}
        <Suspense>
          {/* the root component of your physics world. Needs to be wrapped in <Suspense /> */}
          <Physics
            debug
            interpolate={true}
            maxVelocityIterations={1}
            maxVelocityFrictionIterations={2}
            gravity={[0, -40, 0]}
          >
            <Story />
          </Physics>
        </Suspense>
      </Canvas>
    ),
  ],
}
