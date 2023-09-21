import { Sphere } from '@react-three/drei'
import { RapierRigidBody, RigidBody, type Vector3Object } from '@react-three/rapier'
import { useRef, useEffect, type Dispatch, type SetStateAction } from 'react'

import type { Vector3ObjectBall } from '@/types/BallTypes'
import type { XY } from '@/types/User'
import type { User } from '@/types/User'
export type AttackerProps = {
  key: number
  color: string
  position: XY
  setUsers: Dispatch<SetStateAction<User[]>>
  setBalls: Dispatch<SetStateAction<Array<Vector3ObjectBall>>>
}

export const Attacker = ({ ...props }: AttackerProps) => {
  const rb = useRef<RapierRigidBody>(null)

  const restartBall = () => {
    rb.current?.setTranslation({ x: 0, y: 0, z: 5 }, true) // position to the target
    rb.current?.setLinvel({ x: 0, y: 10, z: -14 }, true) // liner velocity... NEED TO BE FIXED!
  }
  useEffect(() => {
    restartBall()
  })

  return (
    <RigidBody
      ref={rb}
      position={[props.position.x, props.position.y, 0]}
      colliders='ball'
      name={`attacker-${props.key}`}
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
          props.setBalls((prev) =>
            prev.filter((ball) => `target-${ball.id}` !== other.rigidBodyObject!.name),
          )
          target.rigidBodyObject.clear() // self
          other.rigidBodyObject.clear() // other
        }
      }}
      key={props.key}
    >
      <Sphere
        position={[props.position.x, props.position.y, 0]}
        args={[0.45, 32, 32]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color={props.color} roughness={0} />
      </Sphere>
    </RigidBody>
  )
}
