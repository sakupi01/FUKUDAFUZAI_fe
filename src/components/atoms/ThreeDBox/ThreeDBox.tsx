import { Box, Sphere } from '@react-three/drei'

export const ThreeDBox = () => {
  return (
    <>
      <Box args={[25, 25, 0.1]} position={[0, 0, -25 / 2]}>
        <meshStandardMaterial color='black' transparent />
      </Box>
      <Box args={[25, 25, 0.1]} position={[25 / 2, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <meshStandardMaterial color='black' transparent />
      </Box>
      <Box
        args={[25, 25, 0.1]}
        position={[-25 / 2, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <meshStandardMaterial color='black' transparent />
      </Box>
      <Box args={[25, 25, 0.1]} position={[0, 0, 25 / 2]}>
        <meshStandardMaterial color='black' transparent />
      </Box>
      <Sphere args={[1]} position={[0, 3, -9]}>
        <meshStandardMaterial color='orange' transparent />
      </Sphere>
      <Sphere args={[1]} position={[0, 2, 0]}>
        <meshStandardMaterial color='orange' transparent />
      </Sphere>
      <Sphere args={[1]} position={[5, 0, -2]}>
        <meshStandardMaterial color='orange' transparent />
      </Sphere>
    </>
  )
}
