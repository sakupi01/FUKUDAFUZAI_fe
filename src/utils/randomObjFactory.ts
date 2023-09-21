import type { BallProps, Vector3ObjectBall } from '@/types/BallTypes'

function getRandomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export function randomObjectFactory(): Array<Vector3ObjectBall> {
  const RedBall: BallProps = {
    time: 4,
    color: '#a492f9',
    point: 1,
    isDeleted: false,
  }
  const YellowBall: BallProps = {
    time: 3,
    color: '#77ff7e',
    point: 2,
    isDeleted: false,
  }
  const GreenBall: BallProps = {
    time: 2,
    color: '#fff377',
    point: 3,
    isDeleted: false,
  }
  const BlackBall: BallProps = {
    time: 1,
    color: '#fe3972',
    point: 4,
    isDeleted: false,
  }
  const ballArr = [RedBall, YellowBall, GreenBall, BlackBall]
  const randomCount = 1 // ランダムな個数（1から5個）
  // const randomCount = Math.floor(Math.random() * 10) + 5 // ランダムな個数（5から10個）
  const objects = []

  for (let i = 0; i < randomCount; i++) {
    const randomX = getRandomNumber(-6, 6)
    const randomY = getRandomNumber(-6, 6)
    const randomZ = getRandomNumber(-6, 6)
    const randomNumber = Math.floor(getRandomNumber(0, 3.9)) // yの範囲は-2.4から1.6
    const randomBall = ballArr[randomNumber] || BlackBall
    const object: Vector3ObjectBall = {
      x: randomX,
      y: randomY,
      z: randomZ,
      id: objects.length,
      time: randomBall.time,
      color: randomBall.color,
      point: randomBall.point,
      isDeleted: randomBall.isDeleted,
    }
    objects.push(object)
  }
  return objects
}
