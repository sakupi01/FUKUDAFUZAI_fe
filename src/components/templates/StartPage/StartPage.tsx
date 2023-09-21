'use client'
import { useRouter } from 'next/navigation'
import * as THREE from 'three'

import { Font } from '@/components/atoms/Font'

import { CanvasRotatingProvider } from '@/utils/canvasRotatingProvider'
import { css } from 'styled-system/css'

import { Button } from '../../atoms/Button/Button'

export const StartPage = () => {
  const router = useRouter()

  return (
    <>
      <CanvasRotatingProvider camera={new THREE.PerspectiveCamera()}>
        <Font label='Wii-Shoot' />
      </CanvasRotatingProvider>
      <div className={css({ position: 'absolute', bottom: '10%', left: '45%' })}>
        <Button label='Start' onClick={() => router.push('/laser')} />
      </div>
    </>
  )
}
