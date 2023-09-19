import type { Vector3Object } from '@react-three/rapier'
export type BallProps = {
  time: number
  color: '#a492f9' | '#77ff7e' | '#fff377' | '#fe3972'
  point: 1 | 2 | 3 | 4
}
export type Vector3ObjectBall = Vector3Object & BallProps
