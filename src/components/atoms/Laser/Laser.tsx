import { SpotLight } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { Vector3 } from 'three'

export const Laser = ({ vec = new Vector3(), ...props }) => {
  const light = useRef<any>(null)
  const viewport = useThree((state) => state.viewport)
  useFrame((state) => {
    if (light.current === null) {
      return
    }
    light.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0,
      ),
      1,
    )
    light.current.target.updateMatrixWorld()
  })
  return (
    <SpotLight
      castShadow
      ref={light}
      distance={10}
      angle={0.01}
      attenuation={5}
      anglePower={3}
      intensity={20}
      {...props}
    />
  )
}
