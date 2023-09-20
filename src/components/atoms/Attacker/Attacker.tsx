import { Sphere } from '@react-three/drei'
import { RigidBody, type Vector3Object } from '@react-three/rapier'

import type { Dispatch, SetStateAction } from 'react'
export type AttackerProps = {
  key: number
  color: string
  position: Vector3Object
  setHit: Dispatch<SetStateAction<boolean>>
}

export const Attacker = ({ ...props }: AttackerProps) => {
  return (
    <RigidBody
      type={'fixed'}
      position={[props.position.x, props.position.y, props.position.z]}
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
      key={props.key}
    >
      <Sphere
        position={[props.position.x, props.position.y, props.position.z]}
        args={[0.45, 32, 32]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color={props.color} roughness={0} />
      </Sphere>
    </RigidBody>
  )
}
