import { Sphere } from '@react-three/drei'
import { RapierRigidBody, RigidBody, type Vector3Object } from '@react-three/rapier'
import { useRef, useEffect } from 'react'

export type AttackerParam = {
  id: number
  color: string
  position: Vector3Object
  scoreSender: (score: number | null) => void
}

export type AttackerProps = {
  key: number
  color: string
  position: Vector3Object
  // position: XY
  // setUsers: Dispatch<SetStateAction<User[]>>
  scoreSender: (score: number | null) => void
}

export const Attacker = ({ ...props }: AttackerProps) => {
  const rb = useRef<RapierRigidBody>(null)

  console.log('Attacker')

  useEffect(() => {
    console.log('restartBall')

    const restartBall = () => {
      console.log(props.position.x, props.position.y)

      rb.current?.setTranslation(
        { x: props.position.x, y: props.position.y, z: 25 / 2 },
        true,
      ) // position to the target
      rb.current?.setLinvel({ x: 0, y: 10, z: -14 }, true) // liner velocity... NEED TO BE FIXED!
    }
    restartBall()
  }, [props.position.x, props.position.y])

  return (
    <RigidBody
      ref={rb}
      position={[props.position.x, props.position.y, -25 / 2]}
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
          props.scoreSender(100)
          // props.setUsers((prev) =>
          //   prev.filter(
          //     (user) => user.positionGetter(innerWidth, innerHeight) !== props.position,
          //   ),
          // )
        }
      }}
      key={props.key}
    >
      <Sphere
        position={[props.position.x, props.position.y, -25 / 2]}
        args={[0.45, 32, 32]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color={props.color} roughness={0} />
      </Sphere>
    </RigidBody>
  )
}
