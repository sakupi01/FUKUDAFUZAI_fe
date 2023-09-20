'use client'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Suspense, useState, useEffect } from 'react'

import type { User } from '@/types/User'

import { ObjectsForLaser } from '../../organisms/ObjectsForLaser'

export type PlayGroundForLaserProps = {
  users: User[]
}

export const PlayGroundForLaser = ({ ...props }: PlayGroundForLaserProps) => {
  const [cameraParams, setCameraParams] = useState({
    windowHeight: 0,
    windowWidth: 0,
  })
  useEffect(() => {
    setCameraParams({
      windowHeight: innerHeight,
      windowWidth: innerWidth,
    })
  }, [])
  const distance = 800
  const FOV = (2 * Math.atan(cameraParams.windowHeight / (2 * distance)) * 180) / Math.PI

  return (
    <Canvas
      shadows
      gl={{ localClippingEnabled: true }}
      camera={{
        position: [0, 2, 5],
        fov: FOV,
        aspect: cameraParams.windowWidth / cameraParams.windowHeight,
      }}
      style={{ width: '100vw', height: '100vh' }}
    >
      <ambientLight />
      {/* Control the movement of the camera with mouse interaction */}
      {/* <OrbitControls attach="orbitControls" /> */}
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
          <ObjectsForLaser users={props.users} />
        </Physics>
      </Suspense>
    </Canvas>
  )
}
