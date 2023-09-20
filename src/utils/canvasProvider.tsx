'use client'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Suspense } from 'react'

const distance = 800
const FOV = (2 * Math.atan(innerHeight / (2 * distance)) * 180) / Math.PI

export const CanvasProvider = ({ children }: { children: React.ReactNode }) => {
  return (
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
      <pointLight position={[-5, -5, -5]} />
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
          {children}
        </Physics>
      </Suspense>
    </Canvas>
  )
}
