import { Font } from '@/components/atoms/Font'

import { CanvasProvider } from '@/utils/canvasProvider'

export const TheEndOfTheGame = () => {
  return (
    <>
      <CanvasProvider>
        <Font label='Finished!' />
      </CanvasProvider>
    </>
  )
}
