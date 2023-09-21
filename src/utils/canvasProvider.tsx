'use client'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Suspense, useEffect, useState } from 'react'

export const CanvasProvider = ({
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
      camera={props.camera}
      style={{ width: '100vw', height: '100vh' }}
    >
      {/* <axesHelper args={[5]} /> */}
      <ambientLight />
      <pointLight position={[0, 0, 0]} />
      {/* Control the movement of the camera with mouse interaction */}
      {/* <OrbitControls attach='orbitControls' autoRotate enableZoom={false} /> */}
      <OrbitControls attach='orbitControls' enableZoom={false} />
      <color attach='background' args={['#fff']} />
      {/* <fog attach="fog" args={["#fff", 5, 20]} /> */}
      {/* To make sure all the required engines are loaded before te calculation */}
      <Suspense>
        {/* the root component of your physics world. Needs to be wrapped in <Suspense /> */}
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
