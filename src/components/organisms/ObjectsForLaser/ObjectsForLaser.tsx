import React, { useState } from 'react'

import type { Vector3ObjectBall } from '@/types/BallTypes'
import type { User } from '@/types/User'

import { randomObjectFactory } from '@/utils/randomObjFactory'

import { ThreeDBox } from '../../atoms/ThreeDBox/ThreeDBox'
import { Attackers } from '../../molecules/Attackers/Attackers'
import { HitMaterials } from '../../molecules/HitMaterials'

export type ObjectForLaserProps = {
  users: User[]
}

export const ObjectsForLaser = ({ ...props }: ObjectForLaserProps) => {
  const [balls, setBalls] = useState<Array<Vector3ObjectBall>>(randomObjectFactory())
  return (
    <>
      <Attackers users={props.users} setBalls={setBalls} />
      <ThreeDBox />
      <HitMaterials balls={balls} setBalls={setBalls} />
    </>
  )
}
