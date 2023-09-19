import { css } from 'styled-system/css'

import { WaitCard } from '../../molecules/WaitCard/WaitCard'

import type { Dispatch, SetStateAction } from 'react'
export type WaitingComponentProps = {
  setIsWaitingRoom: Dispatch<SetStateAction<boolean>>
}

export const WaitingComponent = ({ ...props }: WaitingComponentProps) => {
  return (
    <main className={css({ width: '100vw', height: '100vh' })}>
      <WaitCard setIsWaitingRoom={props.setIsWaitingRoom} />
    </main>
  )
}
