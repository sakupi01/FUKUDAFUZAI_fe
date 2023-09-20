import { Plane } from '@react-three/drei'

export const ThreeDBox = () => {
  return (
    <>
      <Plane args={[10, 10]}></Plane>
      <Plane args={[10, 10]}></Plane>
      <Plane args={[10, 10]}></Plane>
    </>
  )
}
