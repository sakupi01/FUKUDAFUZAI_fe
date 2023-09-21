import React, { useEffect } from 'react'

import type { Vector3ObjectBall } from '@/types/BallTypes'

import { randomObjectFactory } from '@/utils/randomObjFactory'

import { HitBall } from '../../atoms/HitBall'

type HitMaterialsProps = {
  balls: Array<Vector3ObjectBall>
  setBalls: React.Dispatch<React.SetStateAction<Array<Vector3ObjectBall>>>
}

export const HitMaterials = ({ balls, setBalls }: HitMaterialsProps) => {
  useEffect(() => {
    console.log(balls)

    const interval = setInterval(() => {
      setBalls((prev) => prev.concat(randomObjectFactory()))
    }, 5000)
    console.log(balls)
    return () => clearInterval(interval)
  }, [balls, setBalls])

  const MemoHitBall = React.memo(HitBall)
  return (
    <>
      {balls.map((ball, key) => {
        return (
          !ball.isDeleted && (
            <MemoHitBall ball={ball} balls={balls} setBalls={setBalls} key={key} />
          )
        )
      })}
    </>
  )
}
