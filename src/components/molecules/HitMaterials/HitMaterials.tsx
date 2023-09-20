import React, { useEffect, useState } from 'react'

import type { Vector3ObjectBall } from '@/types/BallTypes'

import { randomObjectFactory } from '@/utils/randomObjFactory'

import { HitBall } from '../../atoms/HitBall'

export const HitMaterials = () => {
  const [balls, setBalls] = useState<Array<Vector3ObjectBall>>(randomObjectFactory())

  useEffect(() => {
    const interval = setInterval(() => {
      setBalls((prev) => prev.concat(randomObjectFactory()))
    }, 5000)
    return () => clearInterval(interval)
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
