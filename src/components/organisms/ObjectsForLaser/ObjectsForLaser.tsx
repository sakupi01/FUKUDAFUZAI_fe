import { useDepthBuffer } from '@react-three/drei'

import { Laser } from '../../atoms/Laser'
import { HitMaterials } from '../../molecules/HitMaterials'

export const ObjectsForLaser = () => {
  const depthBuffer = useDepthBuffer({ frames: 1 })
  return (
    <>
      <HitMaterials />
      <Laser depthBuffer={depthBuffer} color='#0c8cbf' position={[0, 0, 3]} />
      <Laser depthBuffer={depthBuffer} color='#b3bf0c' position={[0, 0, 3]} />
      <Laser depthBuffer={depthBuffer} color='#bf0cb6' position={[0, 0, 3]} />
      <Laser depthBuffer={depthBuffer} color='#12fa54' position={[0, 0, 3]} />
      <Laser depthBuffer={depthBuffer} color='#510cbf' position={[0, 0, 3]} />
      {/* <BoardForLaser /> */}
    </>
  )
}
