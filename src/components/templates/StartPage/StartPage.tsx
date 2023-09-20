import { Font } from '@/components/atoms/Font'

import { CanvasProvider } from '@/utils/canvasProvider'
import { css } from 'styled-system/css'

import { Button } from '../../atoms/Button/Button'

export const StartPage = () => {
  return (
    <>
      <CanvasProvider>
        <Font label='Shoooooot!' />
      </CanvasProvider>
      <div className={css({ position: 'absolute', bottom: '10%', left: '45%' })}>
        <Button label='Go to the Room' />
      </div>
    </>
  )
}
