'use client'
import { Box } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Suspense, useState, useEffect } from 'react'
import { Vector3 } from 'three'

export default function Marusou() {
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

  const [cameraPosition, setCameraPosition] = useState(new Vector3(0, 2, 5))

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomPosition = new Vector3(
        Math.random() * 10 - 5, // X座標をランダムに設定（-5から5の範囲）
        Math.random() * 4 + 1, // Y座標をランダムに設定（1から5の範囲）
        Math.random() * 10 - 5, // Z座標をランダムに設定（-5から5の範囲）
      )
      setCameraPosition(randomPosition)
    }, 2200) // 2秒ごとにカメラポジションを更新

    return () => clearInterval(intervalId) // コンポーネントがアンマウントされたらインターバルをクリア
  }, [])

  console.log(cameraPosition)
  return (
    <Canvas
      shadows
      gl={{ localClippingEnabled: true }}
      camera={{
        position: cameraPosition,
        fov: FOV,
        aspect: cameraParams.windowWidth / cameraParams.windowHeight,
      }}
      style={{ width: '100vw', height: '100vh' }}
    >
      <ambientLight />
      <color attach='background' args={['#fff']} />
      <Suspense>
        <Physics
          debug
          interpolate={true}
          maxVelocityIterations={1}
          maxVelocityFrictionIterations={2}
          gravity={[0, -40, 0]}
        >
          <Box />
        </Physics>
      </Suspense>
    </Canvas>
  )
}
