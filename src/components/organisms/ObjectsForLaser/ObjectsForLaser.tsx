import { useDepthBuffer } from '@react-three/drei'
import { useState } from 'react'

import { Attacker } from '@/components/atoms/Attacker'
import type { AttackerParam } from '@/components/atoms/Attacker/Attacker'

import type { Vector3ObjectBall } from '@/types/BallTypes'
import type { User } from '@/types/User'

import { ThreeDBox } from '../../atoms/ThreeDBox/ThreeDBox'
import { HitMaterials } from '../../molecules/HitMaterials'

export type ObjectForLaserProps = {
  users: User[]
  attackerParams: AttackerParam[]
  setTargets: React.Dispatch<React.SetStateAction<Array<Vector3ObjectBall>>>
}

export const ObjectsForLaser = ({ ...props }: ObjectForLaserProps) => {
  // const [attckers, setAttacker] = useState<typeof RigidBody>()
  const user = {
    id: 1,
    pointer: { x: 0, y: 0, z: 0 },
  }
  const [attckers, setAttacker] = useState(false)
  const [hit, setHit] = useState(false)
  const depthBuffer = useDepthBuffer({ frames: 1 })
  const LASER_COLORS = ['#89d3f0', '#f7fdab', '#f693f1', '#abf0bf', '#c29cff']
  document.body.onclick = () => {
    setAttacker(true)
  }
  return (
    <>
      {/* {attckers && (
        <Attacker key={user.id} color='#89d3f0' position={user.pointer} setHit={setHit} />
      )} */}
      {props.attackerParams.map((attackerParam) => (
        <Attacker
          key={attackerParam.id}
          color={attackerParam.color}
          position={attackerParam.position}
          scoreSender={attackerParam.scoreSender}
          setHit={setHit}
        />
      ))}
      <ThreeDBox />
      <HitMaterials setTargets={props.setTargets} />
      {/* {props.users.map((user) => (
        <Laser
          key={user.id}
          depthBuffer={depthBuffer}
          color={LASER_COLORS[user.id]}
          position={user.pointer}
        />
      ))}
      {/* <BoardForLaser /> */}
    </>
  )
}
