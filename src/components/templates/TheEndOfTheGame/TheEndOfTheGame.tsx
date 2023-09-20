import * as THREE from 'three'

import { Font } from '@/components/atoms/Font'

import { CanvasProvider } from '@/utils/canvasProvider'

export const TheEndOfTheGame = () => {
  return (
    <>
      <CanvasProvider camera={new THREE.PerspectiveCamera()}>
        <Font label='Finished!' />
      </CanvasProvider>
    </>
  )
}
