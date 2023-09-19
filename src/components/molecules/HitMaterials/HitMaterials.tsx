import React, { useEffect, useState } from 'react'

import { randomObjectFactory } from '@/util/randomObjFactory'

import { HitBall } from '../../atoms/HitBall'

import type { Vector3Object } from '@react-three/rapier'

type BallProps = {
  time: number
  color: '#a492f9' | '#77ff7e' | '#fff377' | '#fe3972'
  point: 1 | 2 | 3 | 4
}
export type Vector3ObjectBall = Vector3Object & BallProps

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
