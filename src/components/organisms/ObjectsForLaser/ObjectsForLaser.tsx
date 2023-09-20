import React from 'react'

import { Attacker, type AttackerParam } from '@/components/atoms/Attacker/Attacker'
import { ThreeDBox } from '@/components/atoms/ThreeDBox'
import { HitMaterials } from '@/components/molecules/HitMaterials'

import type { Vector3ObjectBall } from '@/types/BallTypes'
import type { User } from '@/types/User'

export type ObjectForLaserProps = {
  users: User[]
  attackerParams: AttackerParam[]
  setTargets: React.Dispatch<React.SetStateAction<Array<Vector3ObjectBall>>>
}

export const ObjectsForLaser = ({ ...props }: ObjectForLaserProps) => {
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
      ))} */}
      {/* <BoardForLaser /> */}

      {/* <Attackers attackerParams={props.attackerParams} />
      <ThreeDBox />
      <HitMaterials setTargets={props.setTargets} /> */}
    </>
  )
}
