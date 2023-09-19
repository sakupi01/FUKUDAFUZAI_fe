import { BallProps, Vector3ObjectBall } from "@/state/slices/ballsSlice";

function getRandomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function randomObjectFactory(): Array<Vector3ObjectBall> {
  const RedBall: BallProps = {
    time: 4,
    color: "#a492f9",
    point: 1,
  };
  const YellowBall: BallProps = {
    time: 3,
    color: "#77ff7e",
    point: 2,
  };
  const GreenBall: BallProps = {
    time: 2,
    color: "#fff377",
    point: 3,
  };
  const BlackBall: BallProps = {
    time: 1,
    color: "#fe3972",
    point: 4,
  };
  const ballArr = [RedBall, YellowBall, GreenBall, BlackBall];
  // const randomCount = 1; // ランダムな個数（1から5個）
  const randomCount = Math.floor(Math.random() * 5) + 2; // ランダムな個数（1から5個）
  const objects = [];

  for (let i = 0; i < randomCount; i++) {
    const randomX = getRandomNumber(-3.5, 3.5); // xの範囲は-3.5から3.5
    const randomY = getRandomNumber(-2.4, 1.6); // yの範囲は-2.4から1.6
    const randomNumber = Math.floor(getRandomNumber(0, 3.9)); // yの範囲は-2.4から1.6
    const randomBall = ballArr[randomNumber];
    const object: Vector3ObjectBall = {
      x: randomX,
      y: randomY,
      z: 0,
      time: randomBall.time,
      color: randomBall.color,
      point: randomBall.point,
    };
    objects.push(object);
  }
  return objects;
}
