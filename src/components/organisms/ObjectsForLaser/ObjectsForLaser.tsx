import { useDepthBuffer } from '@react-three/drei'

import type { User } from '@/types/User'

import { HitMaterials } from '../../molecules/HitMaterials'

export type ObjectForLaserProps = {
  users: User[]
}

export const ObjectsForLaser = ({ ...props }: ObjectForLaserProps) => {
  const depthBuffer = useDepthBuffer({ frames: 1 })
  const LASER_COLORS = ['#0c8cbf', '#b3bf0c', '#bf0cb6', '#12fa54', '#510cbf']
  return (
    <>
      <HitMaterials />
      {/* {props.users.map((user) => (
        <Laser
          key={user.id}
          depthBuffer={depthBuffer}
          color={LASER_COLORS[user.id]}
          position={user.pointer}
        />
      ))} */}
      {/* <BoardForLaser /> */}
    </>
  )
}
