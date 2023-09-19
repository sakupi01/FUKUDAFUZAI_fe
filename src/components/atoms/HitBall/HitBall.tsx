import { Sphere } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import React from 'react'
import { useEffect, type Dispatch, type SetStateAction } from 'react'

import type { Vector3ObjectBall } from '../../molecules/HitMaterials'

export function HitBall(props: {
  ball: Vector3ObjectBall
  balls: Array<Vector3ObjectBall>
  setBalls: Dispatch<SetStateAction<Array<Vector3ObjectBall>>>
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.setBalls(
        props.balls.filter(
          (p, index) => p.x != props.ball.x || p.y != props.ball.y || p.z != props.ball.z,
        ),
      )
    }, props.ball.time * 1000)

    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <RigidBody
      type={'fixed'}
      position={[props.ball.x, props.ball.y, 0]}
      colliders='ball'
      name='Ball'
    >
      <Sphere
        position={[props.ball.x, props.ball.y, 0]}
        args={[0.25, 32, 32]}
        rotation={[-Math.PI / 2, 0, 0]}
        onPointerEnter={() => {
          props.setBalls(props.balls.filter((p, index) => p !== props.ball)) // add point
        }}
      >
        <meshStandardMaterial color={props.ball.color} roughness={0} />
      </Sphere>
    </RigidBody>
  )
}
