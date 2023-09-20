import React, { useEffect, useState } from 'react'

import type { Vector3ObjectBall } from '@/types/BallTypes'

import { randomObjectFactory } from '@/utils/randomObjFactory'

import { HitBall } from '../../atoms/HitBall'

export type HitMaterialsProps = {
  setTargets: React.Dispatch<React.SetStateAction<Vector3ObjectBall[]>>
}

export const HitMaterials = ({ ...props }: HitMaterialsProps) => {
  const [balls, setBalls] = useState<Array<Vector3ObjectBall>>(randomObjectFactory())

  useEffect(() => {
    const interval = setInterval(() => {
      setBalls((prev) => prev.concat(randomObjectFactory()))
      setBalls((prev) => {
        props.setTargets(prev)
        return prev
      })
    }, 5000)
    return () => clearInterval(interval)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const MemoHitBall = React.memo(HitBall)
  return (
    <>
      {balls.map((ball, key) => (
        <MemoHitBall ball={ball} balls={balls} setBalls={setBalls} key={key} />
      ))}
    </>
  )
}
