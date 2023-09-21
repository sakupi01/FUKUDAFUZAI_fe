import React, { useState } from 'react'

import { Attacker } from '@/components/atoms/Attacker'
import type { AttackerParam } from '@/components/atoms/Attacker/Attacker'
import { ThreeDBox } from '@/components/atoms/ThreeDBox'
import { HitMaterials } from '@/components/molecules/HitMaterials'

import type { Vector3ObjectBall } from '@/types/BallTypes'
import type { User } from '@/types/User'

import { randomObjectFactory } from '@/utils/randomObjFactory'

export type ObjectForLaserProps = {
  users: User[]
  attackerParams: AttackerParam[]
  setTargets: React.Dispatch<React.SetStateAction<Array<Vector3ObjectBall>>>
}

export const ObjectsForLaser = ({ ...props }: ObjectForLaserProps) => {
  const [balls, setBalls] = useState<Array<Vector3ObjectBall>>(randomObjectFactory())
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
          setBalls={setBalls}
          charge={attackerParam.charge}
        />
      ))}
      <ThreeDBox />
      <HitMaterials balls={balls} setBalls={setBalls} />
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
