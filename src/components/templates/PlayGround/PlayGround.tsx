'use client'

import { Box, Environment, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Physics,
  RigidBody,
  RapierRigidBody,
  type Vector3Object,
} from '@react-three/rapier'
import { Suspense, useState, useEffect } from 'react'
import { createContext, useContext, StrictMode, useRef } from 'react'
import { MeshPhysicalMaterial } from 'three'

import type { User } from '@/types/User'

export type PlayGroundForLaserMaruProps = {
  users?: User[]
}

const material = new MeshPhysicalMaterial()

const demoContext = createContext<{
  setDebug?(f: boolean): void
  setPaused?(f: boolean): void
  setCameraEnabled?(f: boolean): void
}>({})

export const useDemo = () => useContext(demoContext)

const ToggleButton = ({
  label,
  value,
  onClick,
}: {
  label: string
  value: boolean
  onClick(): void
}) => (
  <button
    style={{
      background: value ? 'red' : 'transparent',
      border: '2px solid red',
      color: value ? 'white' : 'red',
      borderRadius: 4,
    }}
    onClick={onClick}
  >
    {label}
  </button>
)

const Floor = () => {
  return (
    <RigidBody type='fixed' colliders='cuboid' name='floor'>
      <Box
        position={[0, -12.55 - 5, 0]}
        scale={[200, 10, 200]}
        rotation={[0, 0, 0]}
        receiveShadow
      >
        <shadowMaterial opacity={0.2} />
      </Box>
    </RigidBody>
  )
}

export const PlayGroundForLaserMaru = ({ ...props }: PlayGroundForLaserMaruProps) => {
  const [debug, setDebug] = useState<boolean>(false)
  const [perf, setPerf] = useState<boolean>(false)
  const [paused, setPaused] = useState<boolean>(false)
  const [interpolate, setInterpolate] = useState<boolean>(true)
  const [physicsKey, setPhysicsKey] = useState<number>(0)
  const [cameraEnabled, setCameraEnabled] = useState<boolean>(true)

  const updatePhysicsKey = () => {
    setPhysicsKey((current) => current + 1)
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        fontFamily: 'sans-serif',
      }}
    >
      <Suspense fallback='Loading...'>
        <Canvas shadows gl={{ localClippingEnabled: true }} dpr={[1, 1.5]}>
          <StrictMode>
            <Physics interpolate={true}>
              <directionalLight
                castShadow
                position={[10, 10, 10]}
                shadow-camera-bottom={-40}
                shadow-camera-top={40}
                shadow-camera-left={-40}
                shadow-camera-right={40}
                shadow-mapSize-width={1024}
                shadow-bias={-0.0001}
              />
              <Environment preset='apartment' />

              <OrbitControls enabled={true} />

              <demoContext.Provider
                value={{
                  setDebug,
                  setPaused,
                  setCameraEnabled,
                }}
              ></demoContext.Provider>

              <Ball />

              <Floor />
            </Physics>
          </StrictMode>
        </Canvas>
      </Suspense>

      <div
        style={{
          position: 'absolute',
          bottom: 24,
          left: 24,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          maxWidth: 600,
        }}
      >
        <ToggleButton label='Debug' value={debug} onClick={() => setDebug((v) => !v)} />
        <ToggleButton label='Perf' value={perf} onClick={() => setPerf((v) => !v)} />
        <ToggleButton
          label='Paused'
          value={paused}
          onClick={() => setPaused((v) => !v)}
        />
        <ToggleButton
          label='Interpolate'
          value={interpolate}
          onClick={() => setInterpolate((v) => !v)}
        />
        <ToggleButton label='Reset' value={false} onClick={updatePhysicsKey} />
      </div>
    </div>
  )
}

const Ball = () => {
  const rb = useRef<RapierRigidBody>(null)

  const restartBall = () => {
    rb.current?.setTranslation({ x: 10, y: -7, z: 0 }, true)
    rb.current?.setLinvel({ x: 0, y: 10, z: -14 }, true)
  }

  useFrame(() => {
    if (rb.current) {
      if (rb.current.translation().z > 10) {
        // restartBall()
      }
    }
  })

  useEffect(() => {
    restartBall()
  })

  return (
    <RigidBody
      ref={rb}
      type={'fixed'}
      colliders='ball'
      name='Attacker'
      onCollisionEnter={({ manifold, target, other }) => {
        console.log(
          'Collision at world position ',
          manifold.solverContactPoint(0), // collided point
        )
        // set collided position
        const collisionPosition: Vector3Object = manifold.solverContactPoint(0)

        if (other.rigidBodyObject && target.rigidBodyObject) {
          console.log(
            // this rigid body's Object3D
            target.rigidBodyObject.name,
            ' collided with ',
            // the other rigid body's Object3D
            other.rigidBodyObject.name,
          )
          target.rigidBodyObject.clear()
          other.rigidBodyObject.clear()
        }
      }}
    >
      <Sphere args={[0.45, 32, 32]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial roughness={0} />
      </Sphere>
    </RigidBody>
  )
}
