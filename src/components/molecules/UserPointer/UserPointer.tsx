import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

import type { User } from '@/types/User'

import type { Mesh } from 'three'

export type UserPointerProps = {
  width: number
  height: number
  user: User
}

export const UserPointer = ({ ...props }: UserPointerProps) => {
  const ref = useRef<Mesh>(null)
  useFrame(() => {
    if (!ref.current) return
    const { x, y } = props.user.positionGetter(props.width, props.height)
    console.log(x, y)
    // ref.current.position.set(x, y, 0)
    ref.current.position.set(0, 0, 0)
  })

  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow ref={ref}>
      <circleGeometry args={[4, 32]} />
      <meshBasicMaterial attach='material' color={props.user.iconColor} />
    </mesh>
  )
}
