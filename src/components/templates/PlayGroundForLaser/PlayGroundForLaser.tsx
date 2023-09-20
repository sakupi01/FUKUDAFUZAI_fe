'use client'

import type { User } from '@/types/User'

import { CanvasProvider } from '@/utils/canvasProvider'

import { ObjectsForLaser } from '../../organisms/ObjectsForLaser'

export type PlayGroundForLaserProps = {
  users: User[]
}

export const PlayGroundForLaser = ({ ...props }: PlayGroundForLaserProps) => {
  return (
    <CanvasProvider>
      <ObjectsForLaser users={props.users} />
    </CanvasProvider>
  )
}
