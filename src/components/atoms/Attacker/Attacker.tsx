/* eslint-disable react-hooks/exhaustive-deps */
import { Sphere } from '@react-three/drei'
import { RapierRigidBody, RigidBody, type Vector3Object } from '@react-three/rapier'
import { useRef, useEffect } from 'react'

export type AttackerParam = {
  id: number
  color: string
  position: Vector3Object
  charge : number
  scoreSender: (score: number | null) => void
}

export type AttackerProps = {
  key: number
  color: string
  charge : number
  position: Vector3Object
  // position: XY
  // setUsers: Dispatch<SetStateAction<User[]>>
  scoreSender: (score: number | null) => void
}

function findPointC(A:Vector3Object, B:Vector3Object, distance:number) {
  // ベクトルABを計算
  let vectorAB = {
    x: B.x - A.x,
    y: B.y - A.y,
    z: B.z - A.z,
  };

  // ベクトルABの長さを計算
  let magnitude = Math.sqrt(vectorAB.x**2 + vectorAB.y**2 + vectorAB.z**2);

  // ベクトルABを正規化
  let normalizedVector = {
    x: vectorAB.x / magnitude,
    y: vectorAB.y / magnitude,
    z: vectorAB.z / magnitude,
  };

  // 正規化したベクトルを所望の距離でスケール
  let scaledVector = {
    x: normalizedVector.x * distance,
    y: normalizedVector.y * distance,
    z: normalizedVector.z * distance,
  };

  // 点Cの座標を計算
  let C = {
    x: B.x + scaledVector.x,
    y: B.y + scaledVector.y,
    z: B.z + scaledVector.z,
  };

  return C;
}

// 使い方の例:
// const A = { x: 1, y: 2, z: 3 };
// const B = { x: 4, y: 5, z: 6 };
// const distance = 10;
// const C = findPointC(A, B, distance);
// console.log(C);


export const Attacker = ({ ...props }: AttackerProps) => {
  const rb = useRef<RapierRigidBody>(null)

  useEffect(() => {
    console.log('restartBall')
    const numPosition: Vector3Object = { x: 0, y: 0, z: -25 / 2 }

    const C = findPointC(numPosition, props.position, props.charge*10+10)

    const restartBall = () => {
      console.log(props.position.x, props.position.y)

      rb.current?.setTranslation({ x: 0, y: 0, z: -25 / 2 }, true) // position to the target
      rb.current?.setLinvel(C, true) // liner velocity... NEED TO BE FIXED!
    }
    restartBall()
  }, [props.position.x, props.position.y])

  return (
    <RigidBody
      ref={rb}
      position={[0, 0, 0]}
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
      <Sphere position={[0, 0, 0]} args={[0.2, 8, 8]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color={props.color} roughness={0} />
      </Sphere>
    </RigidBody>
  )
}
