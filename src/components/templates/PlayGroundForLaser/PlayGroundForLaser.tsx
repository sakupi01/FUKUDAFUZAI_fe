'use client'
import { useEffect, type SetStateAction, type Dispatch } from 'react'
import * as THREE from 'three'

import type { AttackerParam } from '@/components/atoms/Attacker/Attacker'

import type { Vector3ObjectBall } from '@/types/BallTypes'
import type { User } from '@/types/User'

import { CanvasProvider } from '@/utils/canvasProvider'

import { ObjectsForLaser } from '../../organisms/ObjectsForLaser'

export type PlayGroundForLaserProps = {
  users: User[]
  camera: THREE.PerspectiveCamera | null
  setCamera: Dispatch<SetStateAction<THREE.PerspectiveCamera | null>>
  attackerParams: AttackerParam[]
  setTargets: React.Dispatch<React.SetStateAction<Array<Vector3ObjectBall>>>
}

export const PlayGroundForLaser = ({ ...props }: PlayGroundForLaserProps) => {
  useEffect(() => {
    const distance = 800
    const FOV = (2 * Math.atan(innerHeight / (2 * distance)) * 180) / Math.PI
    const c = new THREE.PerspectiveCamera(FOV, innerWidth / innerHeight, 0.1, 40)
    c.position.set(0, 0, -25 / 2)
    c.lookAt(0, 0, 0)
    props.setCamera(c)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {props.camera && (
        <CanvasProvider camera={props.camera}>
          <ObjectsForLaser
            users={props.users}
            attackerParams={props.attackerParams}
            setTargets={props.setTargets}
          />
        </CanvasProvider>
      )}
    </>
  )
}
