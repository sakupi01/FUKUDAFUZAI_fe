import { Canvas } from '@react-three/fiber'

import { css } from '../../../../styled-system/css'
import { Button } from '../../atoms/Button/Button'

export type HomeProps = {}

export const Home = ({ ...props }: HomeProps) => {
  return (
    <>
      <div
        className={css({
          position: 'absolute',
          bottom: '50px',
          left: '45vw',
          zIndex: 1,
        })}
      >
        <Button label='スタート' primary neon />
      </div>
      <Canvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: '#000',
        }}
      >
        <ambientLight />
      </Canvas>
    </>
  )
}
