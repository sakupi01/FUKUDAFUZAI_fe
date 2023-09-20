'use client'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Suspense, useEffect, type SetStateAction, type Dispatch } from 'react'
import * as THREE from 'three'

import type { User } from '@/types/User'

import { ObjectsForLaser } from '../../organisms/ObjectsForLaser'

export type PlayGroundForLaserProps = {
  users: User[]
  camera: THREE.PerspectiveCamera | null
  setCamera: Dispatch<SetStateAction<THREE.PerspectiveCamera | null>>
}

export const PlayGroundForLaser = ({ ...props }: PlayGroundForLaserProps) => {
  useEffect(() => {
    const distance = 800
    const FOV = (2 * Math.atan(innerHeight / (2 * distance)) * 180) / Math.PI
    const c = new THREE.PerspectiveCamera(FOV, innerWidth / innerHeight)
    c.position.set(0, 100, 100)
    c.lookAt(0, 0, 0)
    props.setCamera(c)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {props.camera ? (
        <Canvas
          shadows
          camera={props.camera}
          gl={{ localClippingEnabled: true }}
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
      ) : null}
    </>
  )
}
