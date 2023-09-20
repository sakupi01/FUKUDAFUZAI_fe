'use client'
import { useEffect, type SetStateAction, type Dispatch } from 'react'
import * as THREE from 'three'

import type { User } from '@/types/User'

import { CanvasProvider } from '@/utils/canvasProvider'

import { ObjectsForLaser } from '../../organisms/ObjectsForLaser'

export type PlayGroundForLaserProps = {
  users: User[]
  camera: THREE.PerspectiveCamera | null
  setCamera: Dispatch<SetStateAction<THREE.PerspectiveCamera | null>>
}

export const PlayGroundForLaser = ({ ...props }: PlayGroundForLaserProps) => {
  useEffect(() => {
    const distance = 800
    const FOV = (2 * Math.atan(innerHeight / (2 * distance)) * 180) / Math.PI
    const c = new THREE.PerspectiveCamera(FOV, innerWidth / innerHeight)
    c.position.set(0, 100, 100)
    c.lookAt(0, 0, 0)
    props.setCamera(c)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {props.camera && (
        <CanvasProvider camera={props.camera}>
          <ObjectsForLaser users={props.users} />
        </CanvasProvider>
      )}
    </>
  )
}
