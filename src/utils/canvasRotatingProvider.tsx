'use client'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Suspense, useEffect, useState } from 'react'

export const CanvasRotatingProvider = ({
  ...props
}: {
  children: React.ReactNode
  camera: THREE.PerspectiveCamera
}) => {
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
      dpr={[1, 1.5]}
      camera={{
        position: [0, 5, 10],
        fov: FOV,
      }}
      style={{ width: '100vw', height: '100vh' }}
    >
      <ambientLight />
      <pointLight position={[0, 0, 0]} />
      <OrbitControls attach='orbitControls' autoRotate />
      <color attach='background' args={['#fff']} />
      <Suspense>
        <Physics
          interpolate={true}
          maxVelocityIterations={1}
          maxVelocityFrictionIterations={2}
          gravity={[0, 0, 0]}
        >
          {props.children}
        </Physics>
      </Suspense>
    </Canvas>
  )
}
