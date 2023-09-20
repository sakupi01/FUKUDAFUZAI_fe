import React from 'react'

import type { User } from '@/types/User'

import { ThreeDBox } from '../../atoms/ThreeDBox/ThreeDBox'
import { Attackers } from '../../molecules/Attackers/Attackers'
import { HitMaterials } from '../../molecules/HitMaterials'

export type ObjectForLaserProps = {
  users: User[]
}

export const ObjectsForLaser = ({ ...props }: ObjectForLaserProps) => {
  return (
    <>
      <Attackers users={props.users} />
      <ThreeDBox />
      <HitMaterials />
    </>
  )
}
